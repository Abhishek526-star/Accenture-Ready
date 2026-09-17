// src/hooks/useLiveViewer.js
// Custom React hook managing real-time WebSocket connection for live viewer presence

import { useState, useEffect, useRef } from 'react';
import { getAnonymousVisitorId } from '../utils/visitorSession.js';

export function useLiveViewer(room = 'website') {
  const [count, setCount] = useState(1); // Baseline at least current user
  const [isConnected, setIsConnected] = useState(false);

  const socketRef = useRef(null);
  const retryCountRef = useRef(0);
  const reconnectTimerRef = useRef(null);
  const pingIntervalRef = useRef(null);
  const isUnmountedRef = useRef(false);

  useEffect(() => {
    isUnmountedRef.current = false;
    const visitorId = getAnonymousVisitorId();

    function getWsUrl() {
      if (typeof window === 'undefined') return '';
      if (import.meta.env && import.meta.env.VITE_WS_URL) {
        return import.meta.env.VITE_WS_URL;
      }
      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const host = window.location.host;
      return `${protocol}//${host}/ws`;
    }

    function connect() {
      if (isUnmountedRef.current) return;

      const wsUrl = getWsUrl();
      if (!wsUrl) return;

      try {
        const ws = new WebSocket(wsUrl);
        socketRef.current = ws;

        ws.onopen = () => {
          if (isUnmountedRef.current) {
            ws.close();
            return;
          }
          setIsConnected(true);
          retryCountRef.current = 0;

          // Register this anonymous visitor in the target room
          try {
            ws.send(JSON.stringify({
              type: 'register',
              visitorId,
              room
            }));
          } catch {}

          // Start client-side ping interval (every 25 seconds) to keep socket active
          if (pingIntervalRef.current) clearInterval(pingIntervalRef.current);
          pingIntervalRef.current = setInterval(() => {
            if (ws.readyState === WebSocket.OPEN) {
              try {
                ws.send(JSON.stringify({ type: 'ping' }));
              } catch {}
            }
          }, 25000);
        };

        ws.onmessage = (event) => {
          if (isUnmountedRef.current) return;
          try {
            const data = JSON.parse(event.data);
            if (data && data.type === 'presence_count') {
              if (data.room === room && typeof data.count === 'number') {
                setCount(Math.max(1, data.count));
              }
            }
          } catch {}
        };

        const handleClose = () => {
          setIsConnected(false);
          if (pingIntervalRef.current) {
            clearInterval(pingIntervalRef.current);
            pingIntervalRef.current = null;
          }

          if (isUnmountedRef.current) return;

          // Exponential backoff reconnect with jitter (1s, 2s, 4s, up to 10s max)
          const attempt = retryCountRef.current;
          const baseDelay = Math.min(10000, 1000 * Math.pow(2, attempt));
          const jitter = Math.random() * 500;
          const delay = baseDelay + jitter;
          retryCountRef.current = Math.min(attempt + 1, 5);

          if (reconnectTimerRef.current) clearTimeout(reconnectTimerRef.current);
          reconnectTimerRef.current = setTimeout(() => {
            connect();
          }, delay);
        };

        ws.onclose = handleClose;
        ws.onerror = () => {
          try {
            ws.close();
          } catch {}
        };
      } catch {
        // Fallback: retry after 3 seconds
        if (!isUnmountedRef.current) {
          reconnectTimerRef.current = setTimeout(connect, 3000);
        }
      }
    }

    connect();

    return () => {
      isUnmountedRef.current = true;
      if (reconnectTimerRef.current) clearTimeout(reconnectTimerRef.current);
      if (pingIntervalRef.current) clearInterval(pingIntervalRef.current);
      if (socketRef.current) {
        try {
          socketRef.current.close();
        } catch {}
        socketRef.current = null;
      }
    };
  }, [room]);

  return { count, isConnected, room };
}
