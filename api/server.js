const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

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
  secure: process.env.SMTP_SECURE === 'true', // false for port 587 (STARTTLS)
  requireTLS: true, // Require TLS for Gmail
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  tls: {
    rejectUnauthorized: true, // Verify certificates for Gmail
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

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, error: 'Please fill in all required fields.' });
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, error: 'Please enter a valid email address.' });
    }

    // Prepare email content
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
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a2e;">New Contact Form Submission</h2>
          <p><strong>Form:</strong> ${formName || 'Contact Form'}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Organization:</strong> ${organization || 'N/A'}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Subject:</strong> ${subjectLabels[subject] || subject}</p>
          <hr/>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
      text: `
        New Contact Form Submission
        Form: ${formName || 'Contact Form'}
        Name: ${name}
        Email: ${email}
        Organization: ${organization || 'N/A'}
        Phone: ${phone || 'N/A'}
        Subject: ${subjectLabels[subject] || subject}
        Message: ${message}
      `
    };

    // Send email
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
  console.log(`SMTP Port: ${process.env.SMTP_PORT || 587}`);
  console.log(`SMTP User: ${process.env.SMTP_USER}`);
  console.log(`From Email: ${process.env.FROM_EMAIL}`);
  console.log(`To Email: ${process.env.TO_EMAIL || 'info@gdpconsults.ca'}`);
});
