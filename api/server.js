const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config({ silent: true });

const app = express();
const PORT = process.env.API_PORT || process.env.PORT || 3000;

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  methods: ['POST', 'GET'],
  allowedHeaders: ['Content-Type']
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, error: 'Too many requests, please try again later.' }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Create transporter per request (avoids startup crash)
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    requireTLS: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    },
    tls: {
      rejectUnauthorized: false,
      minVersion: 'TLSv1.2'
    }
  });
}

// Email handler - supports both /api/contact and /api/send-email
async function handleEmailSubmission(req, res) {
  try {
    const { name, email, organization, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, error: 'Please fill in all required fields.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, error: 'Please provide a valid email address.' });
    }

    const transporter = createTransporter();

    const mailOptions = {
      from: `"GDP Consulting Website" <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `[GDP Consulting] ${subject} - from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #065f46; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">New Contact Form Submission</h2>
            <p style="color: #a7f3d0; margin: 5px 0 0;">GDP Consulting Website</p>
          </div>
          <div style="background: #f9fafb; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151; width: 130px;">Name:</td><td style="padding: 8px 0; color: #111827;">${name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #059669;">${email}</a></td></tr>
              ${organization ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Organization:</td><td style="padding: 8px 0; color: #111827;">${organization}</td></tr>` : ''}
              ${phone ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td><td style="padding: 8px 0; color: #111827;">${phone}</td></tr>` : ''}
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Subject:</td><td style="padding: 8px 0; color: #111827;">${subject}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb;">
              <p style="font-weight: bold; color: #374151; margin: 0 0 8px;">Message:</p>
              <p style="color: #374151; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="margin-top: 16px; color: #6b7280; font-size: 12px;">Sent from gdpconsults.ca contact form</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully from ${email}`);
    res.json({ success: true, message: 'Your message has been sent successfully!' });

  } catch (error) {
    console.error('Email send error:', error.message);
    res.status(500).json({
      success: false,
      error: 'Failed to send email. Please try again or contact us directly at info@gdpconsults.ca'
    });
  }
}

// Routes - handle both endpoint names
app.post('/api/contact', limiter, handleEmailSubmission);
app.post('/api/send-email', limiter, handleEmailSubmission);

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`API server running on port ${PORT}`);
  console.log(`SMTP: ${process.env.SMTP_USER}@${process.env.SMTP_HOST}:${process.env.SMTP_PORT}`);
});
