#!/usr/bin/env node

/**
 * WordPress Homepage Deployment Script
 * 
 * Deploys the GDPConsults React site homepage to WordPress
 * using native Gutenberg blocks via the WP REST API.
 * 
 * Usage: node wordpress/deploy-homepage.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Block builders
const heroBlock = require('./blocks/hero.cjs');
const aboutBlock = require('./blocks/about.cjs');
const capabilitiesBlock = require('./blocks/capabilities.cjs');
const projectsBlock = require('./blocks/projects.cjs');
const testimonialsBlock = require('./blocks/testimonials.cjs');
const ctaBlock = require('./blocks/cta.cjs');

// WordPress configuration
const WP_BASE_URL = 'https://tamaduni.a2hosted.com/gdpconsults';
const WP_API_URL = `${WP_BASE_URL}/wp-json/wp/v2`;
const WP_USERNAME = 'dmmht';
const WP_PASSWORD = 'XifbQMcUvCEzxcc8WdNS2WNF';
const AUTH_HEADER = 'Basic ' + Buffer.from(`${WP_USERNAME}:${WP_PASSWORD}`).toString('base64');

// Images to upload
const IMAGES_TO_UPLOAD = [
  { file: 'hero_airport_terminal.webp', alt: 'Modern airport terminal infrastructure' },
  { file: 'cap_public_private_partnerships.webp', alt: 'Public-private partnership collaboration' },
  { file: 'project_aviation_panorama.webp', alt: 'Aviation infrastructure panorama' },
  { file: 'cap_energy_sustainability.webp', alt: 'Renewable energy sustainability' },
  { file: 'cap_housing_urban.webp', alt: 'Urban housing development' },
  { file: 'logo-light-bg.png', alt: 'GPD Consulting logo' },
  { file: 'logo-black-bg.svg', alt: 'GPD Consulting logo dark' },
];

// ── HTTP Helper ─────────────────────────────────────────────
function wpRequest(method, endpoint, data = null) {
  return new Promise((resolve, reject) => {
    const url = endpoint.startsWith('http') ? endpoint : `${WP_API_URL}${endpoint}`;
    const urlObj = new URL(url);
    
    const options = {
      hostname: urlObj.hostname,
      port: 443,
      path: urlObj.pathname + urlObj.search,
      method: method,
      headers: {
        'Authorization': AUTH_HEADER,
        'Content-Type': 'application/json',
        'User-Agent': 'GDPConsults-Deploy/1.0',
      },
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          if (res.statusCode >= 400) {
            console.error(`  API Error ${res.statusCode}: ${parsed.message || ''}`);
            reject(new Error(`API Error ${res.statusCode}: ${parsed.message || body.substring(0, 300)}`));
          } else {
            resolve(parsed);
          }
        } catch (e) {
          if (res.statusCode >= 400) {
            reject(new Error(`API Error ${res.statusCode}: ${body.substring(0, 300)}`));
          } else {
            resolve(body);
          }
        }
      });
    });

    req.on('error', reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error('Request timeout')); });
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

// ── Image Upload ────────────────────────────────────────────
function uploadImage(filePath, altText) {
  return new Promise((resolve, reject) => {
    const url = new URL(`${WP_API_URL}/media`);
    const fileName = path.basename(filePath);
    const fileBuffer = fs.readFileSync(filePath);
    
    const ext = path.extname(filePath).toLowerCase();
    const contentTypes = {
      '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
      '.png': 'image/png', '.webp': 'image/webp',
      '.svg': 'image/svg+xml', '.gif': 'image/gif',
    };

    const options = {
      hostname: url.hostname,
      port: 443,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Authorization': AUTH_HEADER,
        'Content-Type': contentTypes[ext] || 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Length': fileBuffer.length,
      },
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          if (res.statusCode >= 400) {
            console.error(`  Upload Error for ${fileName}: ${parsed.message || ''}`);
            reject(new Error(`Upload Error: ${parsed.message || body.substring(0, 200)}`));
          } else {
            console.log(`  Uploaded: ${fileName} -> ${parsed.source_url}`);
            resolve(parsed);
          }
        } catch (e) {
          reject(new Error(`Upload parse error for ${fileName}`));
        }
      });
    });

    req.on('error', reject);
    req.setTimeout(120000, () => { req.destroy(); reject(new Error(`Upload timeout: ${fileName}`)); });
    req.write(fileBuffer);
    req.end();
  });
}

// ── Navigation Menu ─────────────────────────────────────────
async function createNavigationMenu() {
  console.log('\n--- Creating Navigation Menu ---');
  
  // Create pages first (we need their IDs for the menu)
  const pages = [
    { title: 'About', slug: 'about' },
    { title: 'Services', slug: 'services' },
    { title: 'Projects', slug: 'projects' },
    { title: 'Blog', slug: 'blog' },
    { title: 'Contact', slug: 'contact' },
  ];

  const pageIds = {};
  for (const page of pages) {
    try {
      // Check if page exists
      const existing = await wpRequest('GET', `/pages?slug=${page.slug}&status=publish,draft`);
      if (existing.length > 0) {
        pageIds[page.slug] = existing[0].id;
        console.log(`  Page exists: ${page.title} (ID: ${existing[0].id})`);
      } else {
        const created = await wpRequest('POST', '/pages', {
          title: page.title,
          slug: page.slug,
          status: 'publish',
          content: `<!-- wp:paragraph -->\n<p>Content coming soon.</p>\n<!-- /wp:paragraph -->`,
        });
        pageIds[page.slug] = created.id;
        console.log(`  Created page: ${page.title} (ID: ${created.id})`);
      }
    } catch (err) {
      console.error(`  Failed to create page ${page.title}: ${err.message}`);
    }
  }

  return pageIds;
}

// ── Main Deploy Function ────────────────────────────────────
async function deploy() {
  console.log('=== GDPConsults WordPress Homepage Deployment ===\n');

  // Step 1: Upload images
  console.log('--- Uploading Images ---');
  const imageUrls = {};
  
  for (const img of IMAGES_TO_UPLOAD) {
    const filePath = path.join(__dirname, '..', 'public', img.file);
    if (!fs.existsSync(filePath)) {
      console.warn(`  Skipping (not found): ${img.file}`);
      continue;
    }
    try {
      const result = await uploadImage(filePath, img.alt);
      imageUrls[img.file] = result.source_url;
    } catch (err) {
      console.error(`  Failed to upload ${img.file}: ${err.message}`);
    }
  }

  console.log(`\n  Total images uploaded: ${Object.keys(imageUrls).length}`);

  // Step 2: Create navigation pages
  const pageIds = await createNavigationMenu();

  // Step 3: Build homepage content from blocks
  console.log('\n--- Building Homepage Content ---');
  const content = [
    heroBlock(imageUrls),
    aboutBlock(imageUrls),
    capabilitiesBlock(imageUrls),
    projectsBlock(imageUrls),
    testimonialsBlock(imageUrls),
    ctaBlock(imageUrls),
  ].join('\n\n');

  console.log(`  Content length: ${content.length} characters`);

  // Step 4: Create or update homepage
  console.log('\n--- Creating/Updating Homepage ---');
  
  // Check if a page with slug 'home' or front page exists
  let homepageId = null;
  try {
    const existing = await wpRequest('GET', '/pages?slug=home&status=publish,draft');
    if (existing.length > 0) {
      homepageId = existing[0].id;
      console.log(`  Found existing homepage (ID: ${homepageId})`);
    }
  } catch (err) {
    // Try the front page
  }

  if (!homepageId) {
    // Check for front page
    try {
      const existing = await wpRequest('GET', '/pages?slug=front-page&status=publish,draft');
      if (existing.length > 0) {
        homepageId = existing[0].id;
        console.log(`  Found existing front-page (ID: ${homepageId})`);
      }
    } catch (err) {}
  }

  if (!homepageId) {
    // Check for sample page
    try {
      const existing = await wpRequest('GET', '/pages?slug=sample-page&status=publish,draft');
      if (existing.length > 0) {
        homepageId = existing[0].id;
        console.log(`  Found sample-page, will repurpose (ID: ${homepageId})`);
      }
    } catch (err) {}
  }

  try {
    if (homepageId) {
      // Update existing page
      const updated = await wpRequest('POST', `/pages/${homepageId}`, {
        title: 'Home',
        slug: 'home',
        content: content,
        status: 'publish',
        template: '',
      });
      console.log(`  Updated homepage (ID: ${updated.id})`);
      console.log(`  URL: ${updated.link}`);
    } else {
      // Create new page
      const created = await wpRequest('POST', '/pages', {
        title: 'Home',
        slug: 'home',
        content: content,
        status: 'publish',
        template: '',
      });
      homepageId = created.id;
      console.log(`  Created homepage (ID: ${created.id})`);
      console.log(`  URL: ${created.link}`);
    }
  } catch (err) {
    console.error(`  Failed to create/update homepage: ${err.message}`);
    return;
  }

  // Step 5: Set as front page
  console.log('\n--- Setting as Front Page ---');
  try {
    await wpRequest('POST', `${WP_BASE_URL}/wp-json/wp/v2/settings`, {
      show_on_front: 'page',
      page_on_front: homepageId,
    });
    console.log('  Homepage set as front page');
  } catch (err) {
    console.error(`  Could not set front page (may need admin): ${err.message}`);
  }

  console.log('\n=== Deployment Complete ===');
  console.log(`Homepage: ${WP_BASE_URL}/`);
}

// Run
deploy().catch(err => {
  console.error('Deployment failed:', err.message);
  process.exit(1);
});
