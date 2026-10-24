// server/emailService.js
// Handles Nodemailer transport and email composition for Material Sharing, Feedback, and Queries

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from project root
dotenv.config({ path: path.join(__dirname, '../.env') });

/**
 * Returns a configured Nodemailer transporter
 */
function getTransporter() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : null;

  if (!user || !pass || user === 'your_email@gmail.com' || pass === 'your_16_character_app_password') {
    return null;
  }

  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // Use direct SSL (port 465) to prevent connection timeouts on cloud hosts like Render
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: true,
    },
  });
}

/**
 * Check if the email service has credentials configured
 */
export function isEmailConfigured() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : null;
  return Boolean(user && pass && user !== 'your_email@gmail.com' && pass !== 'your_16_character_app_password');
}

/**
 * Send email using Gmail App Password with clean, professional corporate design
 */
export async function sendSubmissionEmail({ type, name, email, subject, category, message, link, file }) {
  const transporter = getTransporter();

  if (!transporter) {
    throw new Error(
      'Sorry, the email service is currently not working. Please try after some time.'
    );
  }

  const receiver = process.env.RECEIVER_EMAIL || process.env.EMAIL_USER;
  const safeName = name?.trim() || 'Anonymous Student';
  const safeEmail = email?.trim() || 'No email provided';
  const rawType = (type || 'material').toLowerCase();
  const safeCategory = category?.trim() || 'General';
  const safeSubject = subject?.trim() || 'New Submission';
  const safeType = rawType.toUpperCase();
  const emailSubject = `[Accenture Ready] [${safeType}] ${safeSubject} - from ${safeName}`;

  // Type-specific badge color
  let typeBadgeBg = '#ecfdf5';
  let typeBadgeColor = '#065f46';
  let typeBadgeBorder = '#a7f3d0';

  if (rawType === 'query') {
    typeBadgeBg = '#eff6ff';
    typeBadgeColor = '#1d4ed8';
    typeBadgeBorder = '#bfdbfe';
  } else if (rawType === 'feedback') {
    typeBadgeBg = '#faf5ff';
    typeBadgeColor = '#7e22ce';
    typeBadgeBorder = '#e9d5ff';
  }

  // Compose Executive HTML Email with all requested fields clearly structured
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${emailSubject}</title>
</head>
<body style="margin: 0; padding: 24px 12px; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a; -webkit-font-smoothing: antialiased;">

  <!-- Outer Centered Wrapper -->
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06); border: 1px solid #e2e8f0;">

    <!-- Modern Header Bar -->
    <tr>
      <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #0284c7 100%); padding: 26px 30px; text-align: left;">
        <div style="display: inline-block; background: ${typeBadgeBg}; border: 1px solid ${typeBadgeBorder}; color: ${typeBadgeColor}; padding: 3px 10px; border-radius: 6px; font-size: 11px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 8px;">
          ${safeType}
        </div>
        <h2 style="margin: 0; color: #ffffff; font-size: 21px; font-weight: 800; letter-spacing: -0.01em;">
          Accenture Ready Submission
        </h2>
        <p style="margin: 6px 0 0; color: rgba(255, 255, 255, 0.85); font-size: 13.5px;">
          Received from <strong>${safeName}</strong> (<a href="mailto:${safeEmail}" style="color: #38bdf8; text-decoration: none;">${safeEmail}</a>)
        </p>
      </td>
    </tr>

    <!-- Card Content -->
    <tr>
      <td style="padding: 26px 30px;">

        <!-- Explicit Specification Table -->
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="font-size: 14px; border-collapse: collapse;">
          
          <!-- Submission Type -->
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-weight: 600; width: 160px; border-bottom: 1px solid #f1f5f9; vertical-align: middle;">
              Submission Type:
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; vertical-align: middle;">
              <span style="display: inline-block; background: ${typeBadgeBg}; color: ${typeBadgeColor}; border: 1px solid ${typeBadgeBorder}; padding: 3px 10px; border-radius: 5px; font-weight: 700; font-size: 12px; letter-spacing: 0.04em;">
                ${safeType}
              </span>
            </td>
          </tr>

          <!-- Student Name -->
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9; vertical-align: middle;">
              Student Name:
            </td>
            <td style="padding: 10px 0; color: #0f172a; font-weight: 700; border-bottom: 1px solid #f1f5f9; vertical-align: middle;">
              ${safeName}
            </td>
          </tr>

          <!-- Student Email -->
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9; vertical-align: middle;">
              Student Email:
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; vertical-align: middle;">
              <a href="mailto:${safeEmail}" style="color: #0284c7; text-decoration: none; font-weight: 600;">
                ${safeEmail}
              </a>
            </td>
          </tr>

          <!-- Category / Subject -->
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9; vertical-align: middle;">
              Category / Subject:
            </td>
            <td style="padding: 10px 0; color: #0f172a; font-weight: 600; border-bottom: 1px solid #f1f5f9; vertical-align: middle;">
              ${safeCategory}
            </td>
          </tr>

          <!-- Attached File -->
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9; vertical-align: middle;">
              Attached File:
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; vertical-align: middle;">
              ${file ? `
                <div style="display: inline-flex; align-items: center; background: #ecfdf5; border: 1px solid #a7f3d0; padding: 4px 10px; border-radius: 6px; color: #065f46; font-size: 13px; font-weight: 700;">
                  📎 ${file.originalname} (${(file.size / (1024 * 1024)).toFixed(2)} MB)
                </div>
              ` : `
                <span style="color: #94a3b8; font-style: italic;">None</span>
              `}
            </td>
          </tr>

          ${link ? `
          <!-- External Link (if shared) -->
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9; vertical-align: middle;">
              External Link:
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; vertical-align: middle;">
              <a href="${link}" target="_blank" style="color: #0284c7; font-weight: 600; text-decoration: underline; word-break: break-all;">
                🔗 ${link}
              </a>
            </td>
          </tr>` : ''}

        </table>

        <!-- Message / Details Box -->
        <div style="margin-top: 22px;">
          <div style="font-size: 12px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">
            Message / Details
          </div>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #0284c7; border-radius: 6px; padding: 14px 18px; font-size: 14px; color: #0f172a; line-height: 1.6; white-space: pre-wrap;">
${message || 'No additional message provided.'}
          </div>
        </div>

        <!-- Direct Reply Action Button -->
        <div style="margin-top: 26px; text-align: center;">
          <a href="mailto:${safeEmail}?subject=Re: [Accenture Ready] ${encodeURIComponent(safeSubject)}" style="display: inline-block; background: #0284c7; color: #ffffff; font-size: 14px; font-weight: 700; padding: 12px 28px; border-radius: 8px; text-decoration: none; box-shadow: 0 2px 6px rgba(2, 132, 199, 0.3);">
            Reply to ${safeName} &rarr;
          </a>
        </div>

      </td>
    </tr>

    <!-- Footer Bar -->
    <tr>
      <td style="background: #f8fafc; padding: 16px 30px; border-top: 1px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 12px; line-height: 1.5;">
        <span>Sent from <strong>Accenture Ready</strong> Student Portal</span>
        <span style="margin: 0 6px;">•</span>
        <span>Tip: Hit Reply to respond directly to <a href="mailto:${safeEmail}" style="color: #0284c7; text-decoration: none;">${safeEmail}</a></span>
      </td>
    </tr>

  </table>

</body>
</html>
  `.trim();

  // Plain text fallback
  const textContent = `
[Accenture Ready] - New ${safeType} Submission
=================================================
Submission Type: ${safeType}
Student Name: ${safeName}
Student Email: ${safeEmail}
Category / Subject: ${safeCategory}
Attached File: ${file ? `${file.originalname} (${(file.size / (1024 * 1024)).toFixed(2)} MB)` : 'None'}
${link ? `External Link: ${link}\n` : ''}
Message / Details:
${message || 'No details provided.'}
=================================================
Tip: Replying directly to this email will respond to ${safeEmail}.
  `.trim();

  // Attachments setup
  const attachments = [];
  if (file && file.buffer) {
    attachments.push({
      filename: file.originalname,
      content: file.buffer,
      contentType: file.mimetype,
    });
  }

  // Send mail options
  const mailOptions = {
    from: `"Accenture Ready Portal" <${process.env.EMAIL_USER}>`,
    to: receiver,
    replyTo: safeEmail.includes('@') ? safeEmail : undefined,
    subject: emailSubject,
    text: textContent,
    html: htmlContent,
    attachments,
  };

  const info = await transporter.sendMail(mailOptions);
  return { success: true, messageId: info.messageId };
}
