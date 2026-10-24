// server/index.js
// Production Express server mounting static bundle, health check API, and WebSocket Presence Server

import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import multer from 'multer';
import dotenv from 'dotenv';
import { createPresenceServer } from './presenceServer.js';
import { sendSubmissionEmail, isEmailConfigured } from './emailService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env
dotenv.config({ path: path.join(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 3001;
const distPath = path.join(__dirname, '../dist');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer in-memory storage for handling file uploads (PDF, DOCX, images, TXT up to 20MB)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 20 * 1024 * 1024, // 20 MB max file size
  },
});

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

// Email status endpoint to inform frontend if Gmail App Password is configured
app.get('/api/email-status', (req, res) => {
  const configured = isEmailConfigured();
  res.json({
    configured,
    receiverEmail: configured ? (process.env.RECEIVER_EMAIL || process.env.EMAIL_USER) : null,
  });
});

// POST /api/send-email (Multer processes optional file upload with field name "file")
app.post('/api/send-email', upload.single('file'), async (req, res) => {
  try {
    const { type, name, email, subject, category, message, link } = req.body;

    if (!message && !req.file && !link) {
      return res.status(400).json({
        success: false,
        error: 'Please provide either a message, a link, or attach a file.'
      });
    }

    const result = await sendSubmissionEmail({
      type,
      name,
      email,
      subject,
      category,
      message,
      link,
      file: req.file,
    });

    res.json({
      success: true,
      message: 'Email delivered successfully via Gmail App Password!',
      messageId: result.messageId,
    });
  } catch (error) {
    console.error('[Email Error]:', error.message);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to send email. Check your Gmail App Password configuration in .env.',
    });
  }
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
