// api/email-status.js
// Vercel Serverless Function to report email configuration status

import { isEmailConfigured } from '../server/emailService.js';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const configured = isEmailConfigured();
  return res.status(200).json({
    configured,
    receiverEmail: configured ? (process.env.RECEIVER_EMAIL || process.env.EMAIL_USER) : null,
  });
}
