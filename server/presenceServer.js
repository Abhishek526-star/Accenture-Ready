// server/presenceServer.js
// Lightweight, anonymous, WebSocket-based presence tracking server with multi-tab deduplication,
// heartbeat pruning, room extensibility, and strict security validation.

import { WebSocketServer, WebSocket } from 'ws';

/**
 * In-memory presence store.
 * Maps rooms -> Map<visitorId, Set<WebSocket>>
 * 
 * Allows multi-tab deduplication: If a visitor has 3 open tabs in the same session,
 * they have 3 active sockets registered under 1 visitorId. The room count is 1.
 * Only when all 3 sockets disconnect does the visitor count decrement.
 */
export class PresenceStore {
  constructor() {
    // Map<roomName, Map<visitorId, Set<WebSocket>>>
    this.rooms = new Map();
  }

  getRoomMap(room) {
    if (!this.rooms.has(room)) {
      this.rooms.set(room, new Map());
    }
    return this.rooms.get(room);
  }

  addVisitor(room, visitorId, socket) {
    const roomMap = this.getRoomMap(room);
    let socketSet = roomMap.get(visitorId);
    if (!socketSet) {
      socketSet = new Set();
      roomMap.set(visitorId, socketSet);
    }
    socketSet.add(socket);
    return roomMap.size;
  }

  removeVisitor(room, visitorId, socket) {
    if (!this.rooms.has(room)) return 0;
    const roomMap = this.rooms.get(room);
    const socketSet = roomMap.get(visitorId);
    if (socketSet) {
      socketSet.delete(socket);
      if (socketSet.size === 0) {
        roomMap.delete(visitorId);
      }
    }
    if (roomMap.size === 0) {
      this.rooms.delete(room);
      return 0;
    }
    return roomMap.size;
  }

  getRoomCount(room) {
    if (!this.rooms.has(room)) return 0;
    return this.rooms.get(room).size;
  }

  getAllRooms() {
    return Array.from(this.rooms.keys());
  }
}

/**
 * Validates an anonymous visitor ID format (must be a valid UUID or alphanumeric string, max 64 chars)
 */
function isValidVisitorId(id) {
  if (typeof id !== 'string') return false;
  if (id.length < 10 || id.length > 64) return false;
  // Allow standard UUID characters and hyphens/underscores
  return /^[a-zA-Z0-9_-]+$/.test(id);
}

/**
 * Validates a room identifier (alphanumeric, colons, hyphens, max 48 chars)
 */
function isValidRoom(room) {
  if (typeof room !== 'string') return false;
  if (room.length === 0 || room.length > 48) return false;
  return /^[a-zA-Z0-9_:-]+$/.test(room);
}

export function createPresenceServer(httpServer, options = {}) {
  const path = options.path || '/ws';
  const defaultRoom = options.defaultRoom || 'website';
  const store = new PresenceStore();

  // Socket metadata tracker: WeakMap<WebSocket, { visitorId, room, isAlive, messageCount, lastReset }>()
  const socketMeta = new WeakMap();

  const wss = new WebSocketServer({ noServer: true });

  // Broadcast presence count to all connected clients in a specific room
  function broadcastCount(room) {
    const count = store.getRoomCount(room);
    const payload = JSON.stringify({
      type: 'presence_count',
      room,
      count,
      timestamp: Date.now()
    });

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        const meta = socketMeta.get(client);
        if (meta && meta.room === room) {
          try {
            client.send(payload);
          } catch {}
        }
      }
    });
  }

  // Handle upgrade requests specifically on the designated path (/ws)
  httpServer.on('upgrade', (request, socket, head) => {
    try {
      const url = new URL(request.url, `http://${request.headers.host || 'localhost'}`);
      if (url.pathname === path) {
        wss.handleUpgrade(request, socket, head, (ws) => {
          wss.emit('connection', ws, request);
        });
      }
    } catch {
      // Ignore non-matching or malformed upgrade requests
    }
  });

  // Client connection handler
  wss.on('connection', (ws) => {
    socketMeta.set(ws, {
      visitorId: null,
      room: defaultRoom,
      isAlive: true,
      messageCount: 0,
      lastReset: Date.now()
    });

    // Native ping-pong response handler
    ws.on('pong', () => {
      const meta = socketMeta.get(ws);
      if (meta) meta.isAlive = true;
    });

    ws.on('message', (data) => {
      const meta = socketMeta.get(ws);
      if (!meta) return;

      // Rate limit check: max 20 messages per 5-second window
      const now = Date.now();
      if (now - meta.lastReset > 5000) {
        meta.messageCount = 0;
        meta.lastReset = now;
      }
      meta.messageCount++;
      if (meta.messageCount > 20) {
        // Rate limit exceeded: drop excessive messages safely
        return;
      }

      // Max payload size check (1 KB)
      if (data.length > 1024) {
        return;
      }

      try {
        const message = JSON.parse(data.toString());
        if (!message || typeof message !== 'object') return;

        // Security check: Ignore any client attempting to spoof server counts
        if (message.online !== undefined || message.count !== undefined) {
          // Discard malicious count spoofing attempts immediately
          return;
        }

        switch (message.type) {
          case 'register': {
            const rawVisitorId = message.visitorId;
            const targetRoom = isValidRoom(message.room) ? message.room : defaultRoom;

            if (isValidVisitorId(rawVisitorId)) {
              // If previously registered in another room or with another ID, remove first
              if (meta.visitorId) {
                store.removeVisitor(meta.room, meta.visitorId, ws);
                broadcastCount(meta.room);
              }

              meta.visitorId = rawVisitorId;
              meta.room = targetRoom;
              meta.isAlive = true;

              store.addVisitor(targetRoom, rawVisitorId, ws);
              broadcastCount(targetRoom);
            }
            break;
          }

          case 'join_room': {
            const newRoom = message.room;
            if (isValidRoom(newRoom) && meta.visitorId) {
              const oldRoom = meta.room;
              store.removeVisitor(oldRoom, meta.visitorId, ws);
              broadcastCount(oldRoom);

              meta.room = newRoom;
              store.addVisitor(newRoom, meta.visitorId, ws);
              broadcastCount(newRoom);
            }
            break;
          }

          case 'ping': {
            meta.isAlive = true;
            try {
              ws.send(JSON.stringify({ type: 'pong', timestamp: Date.now() }));
            } catch {}
            break;
          }

          default:
            // Unknown or unsupported message types are safely discarded
            break;
        }
      } catch (err) {
        // Malformed JSON is safely caught without terminating the server
      }
    });

    const handleDisconnect = () => {
      const meta = socketMeta.get(ws);
      if (meta && meta.visitorId) {
        store.removeVisitor(meta.room, meta.visitorId, ws);
        broadcastCount(meta.room);
      }
    };

    ws.on('close', handleDisconnect);
    ws.on('error', handleDisconnect);
  });

  // Heartbeat: Ping all connections every 30 seconds.
  // Terminate any dead or stale connections that failed to respond to the previous ping.
  const heartbeatInterval = setInterval(() => {
    wss.clients.forEach((ws) => {
      const meta = socketMeta.get(ws);
      if (!meta) return;

      if (meta.isAlive === false) {
        // Socket did not respond to last heartbeat: terminate and prune
        if (meta.visitorId) {
          store.removeVisitor(meta.room, meta.visitorId, ws);
          broadcastCount(meta.room);
        }
        return ws.terminate();
      }

      meta.isAlive = false;
      try {
        ws.ping();
      } catch {
        ws.terminate();
      }
    });
  }, 30000);

  wss.on('close', () => {
    clearInterval(heartbeatInterval);
  });

  return {
    wss,
    store,
    getOnlineCount: (room = defaultRoom) => store.getRoomCount(room),
    close: () => {
      clearInterval(heartbeatInterval);
      wss.close();
    }
  };
}
