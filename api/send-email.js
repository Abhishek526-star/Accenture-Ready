// api/send-email.js
// Vercel Serverless Function handling email dispatch via Gmail SMTP on Port 465

import multer from 'multer';
import { sendSubmissionEmail } from '../server/emailService.js';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

// Disallow body parser so Multer can process multipart/form-data
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    await runMiddleware(req, res, upload.single('file'));
    const { type, name, email, subject, category, message, link } = req.body || {};

    if (!message && !req.file && !link) {
      return res.status(400).json({
        success: false,
        error: 'Please provide either a message, a link, or attach a file.',
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

    return res.status(200).json({
      success: true,
      message: 'Email delivered successfully via Gmail App Password!',
      messageId: result.messageId,
    });
  } catch (error) {
    console.error('[Vercel Serverless Email Error]:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to send email. Check your Gmail App Password configuration in Vercel.',
    });
  }
}
