#!/usr/bin/env node

/**
 * WordPress Navigation Setup Script
 * 
 * Creates a navigation menu with links to all pages
 * and configures the Astra theme header.
 * 
 * Usage: node wordpress/setup-navigation.cjs
 */

const https = require('https');
const path = require('path');
const fs = require('fs');

const WP_BASE_URL = 'https://tamaduni.a2hosted.com/gdpconsults';
const WP_API_URL = `${WP_BASE_URL}/wp-json/wp/v2`;
const WP_USERNAME = 'dmmht';
const WP_PASSWORD = 'XifbQMcUvCEzxcc8WdNS2WNF';
const AUTH_HEADER = 'Basic ' + Buffer.from(`${WP_USERNAME}:${WP_PASSWORD}`).toString('base64');

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

async function setupNavigation() {
  console.log('=== Setting Up Navigation ===\n');

  // Step 1: Get all pages
  console.log('--- Getting Pages ---');
  const pages = await wpRequest('GET', '/pages?per_page=20&status=publish');
  const pageMap = {};
  for (const page of pages) {
    pageMap[page.slug] = { id: page.id, title: page.title.rendered, link: page.link };
    console.log(`  Page: ${page.title.rendered} (${page.slug}) -> ${page.link}`);
  }

  // Step 2: Create menu via WP REST API menus endpoint
  // The WP REST API doesn't natively support menus, so we'll use the nav_menu approach
  // We need to create a wp_navigation block post for block themes, or use the classic menu API
  
  // For Astra (classic theme), we need to use the /wp/v2/menus endpoint or the nav-menus
  // Let's try creating a navigation menu using the WordPress menus API
  
  console.log('\n--- Creating Navigation Menu ---');
  
  // Try to create menu via the menus endpoint (requires WP 5.9+)
  try {
    // First check if menus endpoint exists
    const menuItems = [
      { title: 'Home', url: `${WP_BASE_URL}/`, order: 1 },
      { title: 'About', url: `${WP_BASE_URL}/about/`, order: 2 },
      { title: 'Services', url: `${WP_BASE_URL}/services/`, order: 3 },
      { title: 'Projects', url: `${WP_BASE_URL}/projects/`, order: 4 },
      { title: 'Blog', url: `${WP_BASE_URL}/blog/`, order: 5 },
      { title: 'Contact', url: `${WP_BASE_URL}/contact/`, order: 6 },
    ];

    // Create a wp_navigation post (block-based navigation)
    const navContent = menuItems.map(item => 
      `<!-- wp:navigation-link {"label":"${item.title}","url":"${item.url}","kind":"custom","isTopLevelLink":true} /-->`
    ).join('\n');

    const navPost = await wpRequest('POST', `${WP_BASE_URL}/wp-json/wp/v2/navigation`, {
      title: 'Main Navigation',
      content: navContent,
      status: 'publish',
    });
    console.log(`  Created navigation post (ID: ${navPost.id})`);
  } catch (err) {
    console.log(`  Navigation post creation: ${err.message}`);
    console.log('  Trying classic menu approach...');
  }

  // Also try to create classic menus via the REST API
  try {
    // Create menu
    const menu = await wpRequest('POST', `${WP_BASE_URL}/wp-json/wp/v2/menus`, {
      name: 'Main Menu',
      slug: 'main-menu',
    });
    console.log(`  Created classic menu: ${menu.name || menu.id}`);
  } catch (err) {
    console.log(`  Classic menu: ${err.message}`);
  }

  // Upload the logo for the site
  console.log('\n--- Setting Site Logo ---');
  try {
    const logoPath = path.join(__dirname, '..', 'public', 'logo-light-bg.png');
    if (fs.existsSync(logoPath)) {
      // Check if already uploaded
      const media = await wpRequest('GET', '/media?search=logo-light-bg&per_page=5');
      let logoId = null;
      if (media.length > 0) {
        logoId = media[0].id;
        console.log(`  Logo already uploaded (ID: ${logoId})`);
      }
      
      if (logoId) {
        // Set as site logo
        await wpRequest('POST', `${WP_BASE_URL}/wp-json/wp/v2/settings`, {
          site_logo: logoId,
          site_icon: logoId,
        });
        console.log('  Site logo set');
      }
    }
  } catch (err) {
    console.log(`  Logo setup: ${err.message}`);
  }

  // Set site title and tagline
  console.log('\n--- Setting Site Identity ---');
  try {
    await wpRequest('POST', `${WP_BASE_URL}/wp-json/wp/v2/settings`, {
      title: 'GPD Consulting',
      description: 'Global Partnerships for African Development',
    });
    console.log('  Site title and tagline set');
  } catch (err) {
    console.log(`  Site identity: ${err.message}`);
  }

  console.log('\n=== Navigation Setup Complete ===');
  console.log(`Visit: ${WP_BASE_URL}/`);
}

setupNavigation().catch(err => {
  console.error('Setup failed:', err.message);
  process.exit(1);
});
