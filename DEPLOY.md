# GPD Consulting - Coolify Deployment Guide

## Overview

This guide explains how to deploy the GPD Consulting website on Coolify with:
- **Frontend**: React SPA served by Nginx
- **Backend API**: Node.js/Express for email handling
- **Email**: SMTP via Mailpit (already deployed in your Coolify instance)

## Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Nginx (80)    │────▶│  API Server     │────▶│   Mailpit       │
│   (Frontend)    │     │   (3000)        │     │   (SMTP:1025)   │
└─────────────────┘     └─────────────────┘     └─────────────────┘
        │
        ▼
   React SPA with
   Client-side routing
```

## Prerequisites

1. Coolify instance running
2. Mailpit deployed and accessible in Coolify
3. GitHub repository with this code

## Deployment Steps

### 1. Push Code to GitHub

```bash
git init
git add .
git commit -m "Initial commit for Coolify deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gpd-consulting.git
git push -u origin main
```

### 2. Create New Resource in Coolify

1. Go to your Coolify dashboard
2. Click **"New Resource"**
3. Select **"Docker Compose"**
4. Choose your GitHub repository

### 3. Configure Environment Variables

Add these environment variables in Coolify:

| Variable | Description | Example |
|----------|-------------|---------|
| `SMTP_HOST` | Mailpit hostname in Coolify | `mailpit` or your Mailpit container name |
| `SMTP_PORT` | Mailpit SMTP port | `1025` |
| `SMTP_USER` | SMTP username (if required) | leave empty for Mailpit |
| `SMTP_PASS` | SMTP password (if required) | leave empty for Mailpit |
| `FROM_EMAIL` | Sender email address | `noreply@gdpconsults.ca` |
| `TO_EMAIL` | Recipient email address | `info@gdpconsults.ca` |
| `FRONTEND_URL` | Your domain URL | `https://your-domain.com` |

### 4. Configure Docker Compose

Coolify will use the `docker-compose.yml` file automatically. Make sure the services are:
- `frontend` - Port 80
- `api` - Port 3000

### 5. Deploy

Click **"Deploy"** in Coolify. The build process will:
1. Build the React frontend
2. Build the Node.js API
3. Start both services

### 6. Configure Domain

1. In Coolify, go to your resource settings
2. Add your domain
3. Enable HTTPS (Let's Encrypt)

## Routing Configuration

The website uses **client-side routing** with proper SEO support:

| URL | Page | Description |
|-----|------|-------------|
| `/` | Home | Hero, capabilities, about preview, projects preview, contact |
| `/about` | About | Full about page with company info |
| `/services` | Services | All 9 service cards and expertise |
| `/projects` | Projects | All project listings |
| `/contact` | Contact | Full contact form |

### How SPA Routing Works

The `nginx.conf` includes this critical line for SPA routing:
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

This means:
- Direct access to `/about` serves `index.html`
- React Router takes over and renders the About page
- SEO meta tags are set dynamically per page

## Email Configuration

### Mailpit Integration

The API connects to your Mailpit instance via SMTP:

```javascript
// api/server.js
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,  // Your Mailpit hostname
  port: process.env.SMTP_PORT,  // 1025 (default Mailpit SMTP)
  secure: false
});
```

### Finding Mailpit Hostname in Coolify

1. Go to your Mailpit service in Coolify
2. Check the service name (usually `mailpit` or similar)
3. Use that as `SMTP_HOST`

### Testing Email

1. Submit a contact form
2. Check Mailpit web UI (usually at `your-domain:8025`)
3. Verify emails are being captured

## Troubleshooting

### Forms Not Submitting

1. Check browser console for errors
2. Verify API is running: `curl https://your-domain/api/health`
3. Check API logs in Coolify

### Emails Not Sending

1. Verify Mailpit is running
2. Check `SMTP_HOST` and `SMTP_PORT` environment variables
3. Test SMTP connection from API container

### Pages 404 on Direct Access

1. Verify nginx is running
2. Check `nginx.conf` has `try_files $uri $uri/ /index.html;`
3. Clear browser cache

### CORS Errors

1. Verify `FRONTEND_URL` environment variable matches your domain
2. Check CORS headers in `nginx.conf`

## File Structure

```
gpd-consulting/
├── api/                    # Backend API
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── public/                 # Static assets
│   ├── _redirects
│   ├── robots.txt
│   └── sitemap.xml
├── src/                    # React frontend
│   ├── components/
│   ├── contexts/
│   ├── pages/
│   ├── sections/
│   └── ...
├── Dockerfile              # Frontend Dockerfile
├── nginx.conf              # Nginx configuration
├── docker-compose.yml      # Coolify deployment
├── coolify.json            # Coolify metadata
├── .env.example            # Environment template
└── DEPLOY.md               # This file
```

## Maintenance

### Updating the Website

1. Make changes locally
2. Commit and push to GitHub
3. Coolify will auto-deploy (if enabled) or manually trigger deploy

### Viewing Logs

```bash
# Frontend logs
docker logs gpd-consulting-frontend

# API logs
docker logs gpd-consulting-api
```

### Backup

Regular backups should include:
- Source code (GitHub)
- Environment variables (Coolify settings)
- Mailpit data (if persistent storage configured)

## Support

For issues specific to:
- **Coolify**: https://coolify.io/docs/
- **Mailpit**: https://mailpit.axllent.org/docs/
- **Nginx**: https://nginx.org/en/docs/
