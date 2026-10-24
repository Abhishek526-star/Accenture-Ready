import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import multer from 'multer'
import { createPresenceServer } from './server/presenceServer.js'
import { sendSubmissionEmail, isEmailConfigured } from './server/emailService.js'

function livePresencePlugin() {
  return {
    name: 'live-presence-websocket',
    configureServer(server) {
      if (server.httpServer) {
        createPresenceServer(server.httpServer, { path: '/ws' })
      }
    }
  }
}

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 20 * 1024 * 1024 }
})

function emailApiPlugin() {
  return {
    name: 'email-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/email-status', (_req, res) => {
        const configured = isEmailConfigured();
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
          configured,
          receiverEmail: configured ? (process.env.RECEIVER_EMAIL || process.env.EMAIL_USER) : null
        }));
      });

      server.middlewares.use('/api/send-email', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: false, error: 'Method Not Allowed' }));
          return;
        }

        upload.single('file')(req, res, async (err) => {
          if (err) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: err.message }));
            return;
          }

          try {
            const { type, name, email, subject, category, message, link } = req.body || {};

            if (!message && !req.file && !link) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                success: false,
                error: 'Please provide either a message, a link, or attach a file.'
              }));
              return;
            }

            const result = await sendSubmissionEmail({
              type,
              name,
              email,
              subject,
              category,
              message,
              link,
              file: req.file
            });

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
              success: true,
              message: 'Email delivered successfully via Gmail App Password!',
              messageId: result.messageId
            }));
          } catch (error) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
              success: false,
              error: error.message || 'Failed to send email. Check your Gmail App Password configuration in .env.'
            }));
          }
        });
      });
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), livePresencePlugin(), emailApiPlugin()],
  server: {
    proxy: {
      '/api/judge': {
        target: 'https://ce.judge0.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/judge/, '')
      }
    }
  }
})
