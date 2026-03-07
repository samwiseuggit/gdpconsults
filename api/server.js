const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.API_PORT || 3000;

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  methods: ['POST', 'GET'],
  allowedHeaders: ['Content-Type']
}));

// Rate limiting - 5 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, error: 'Too many requests, please try again later.' }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create SMTP transporter for Gmail
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  requireTLS: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  tls: {
    rejectUnauthorized: true,
    minVersion: 'TLSv1.2'
  }
});

// Verify SMTP connection
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP Connection Error:', error);
  } else {
    console.log('Gmail SMTP connection verified successfully');
  }
});

// Contact form endpoint
app.post('/api/contact', limiter, async (req, res) => {
  try {
    const { name, email, organization, phone, subject, message, formName } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, error: 'Please fill in all required fields.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, error: 'Please enter a valid email address.' });
    }

    const subjectLabels = {
      partnership: 'Partnership Inquiry',
      project: 'Project Discussion',
      services: 'Services Information',
      career: 'Career Opportunities',
      other: 'Other'
    };

    const mailOptions = {
      from: process.env.FROM_EMAIL || 'noreply@gdpconsults.ca',
      to: process.env.TO_EMAIL || 'info@gdpconsults.ca',
      replyTo: email,
      subject: `[${formName || 'Contact Form'}] ${subjectLabels[subject] || subject}`,
      html: `<div style="font-family: Arial, sans-serif;"><h2>New Contact Form Submission</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Organization:</strong> ${organization || 'N/A'}</p><p><strong>Subject:</strong> ${subjectLabels[subject] || subject}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p></div>`,
      text: `New Contact Form Submission\nName: ${name}\nEmail: ${email}\nOrganization: ${organization || 'N/A'}\nSubject: ${subjectLabels[subject] || subject}\nMessage: ${message}`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);

    res.status(200).json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon!'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later or contact us directly at info@gdpconsults.ca'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`API Server running on port ${PORT}`);
  console.log(`SMTP Host: ${process.env.SMTP_HOST || 'smtp.gmail.com'}`);
  console.log(`SMTP User: ${process.env.SMTP_USER}`);
});
