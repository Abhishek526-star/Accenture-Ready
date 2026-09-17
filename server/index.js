// server/index.js
// Production Express server mounting static bundle, health check API, and WebSocket Presence Server

import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createPresenceServer } from './presenceServer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const distPath = path.join(__dirname, '../dist');

app.use(express.json());

// Permissive CORS middleware for cross-origin frontend support
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

// Create HTTP server
const httpServer = http.createServer(app);

// Mount WebSocket presence server on /ws
const presence = createPresenceServer(httpServer, { path: '/ws' });

// Health check API endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    onlineUsers: presence.getOnlineCount('website')
  });
});

// Serve frontend production build if available
app.use(express.static(distPath));

// SPA catch-all fallback (Express 5 compatible)
app.use((req, res, next) => {
  if (req.method !== 'GET' || req.path.startsWith('/api') || req.path === '/ws') {
    return next();
  }
  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) {
      res.status(200).send('Accenture Ready API Server running. Build frontend with npm run build.');
    }
  });
});

if (process.env.NODE_ENV !== 'test') {
  httpServer.listen(PORT, () => {
    console.log(`[Accenture Ready] Server running at http://localhost:${PORT}`);
    console.log(`[Accenture Ready] WebSocket presence listening on ws://localhost:${PORT}/ws`);
  });
}

export { app, httpServer, presence };
