# WordPress Deployment Scripts

Scripts to deploy the GDPConsults React site to WordPress using native Gutenberg blocks via the WP REST API.

## Overview

These scripts convert the React site's homepage into WordPress Gutenberg blocks, making the content fully editable by non-technical users through the WordPress block editor.

## Scripts

### `deploy-homepage.cjs`

Main deployment script that:
1. Uploads images from `public/` to the WordPress media library
2. Creates placeholder pages (About, Services, Projects, Blog, Contact)
3. Builds the homepage using Gutenberg blocks for all 6 sections:
   - **Hero Section** - Full-screen cover with stats and CTAs
   - **About Section** - Company overview with image, highlights, and values
   - **Capabilities Section** - 9 service cards in a 3x3 grid
   - **Projects Section** - 3 featured project cards with images
   - **Testimonials Section** - 3 client testimonial cards
   - **CTA Section** - Call-to-action with dark background
4. Sets the homepage as the site's front page

### `setup-navigation.cjs`

Navigation setup script that:
1. Creates a WordPress navigation menu with all page links
2. Sets the site logo
3. Configures site title and tagline

### `blocks/` directory

Individual Gutenberg block builders for each homepage section:
- `hero.cjs` - Hero cover section
- `about.cjs` - About section with values
- `capabilities.cjs` - Services/capabilities grid
- `projects.cjs` - Featured projects
- `testimonials.cjs` - Client testimonials
- `cta.cjs` - Call-to-action section

## Usage

```bash
# Deploy the homepage
node wordpress/deploy-homepage.cjs

# Set up navigation and site identity
node wordpress/setup-navigation.cjs
```

## WordPress Configuration

- **URL**: https://tamaduni.a2hosted.com/gdpconsults
- **Theme**: Astra
- **API**: WP REST API v2

## Design Decisions

- All blocks use native WordPress Gutenberg blocks (no custom plugins required)
- Colors match the React site's emerald/gray palette (#10b981, #34d399, #111827, etc.)
- Full-width sections using `alignfull` class
- Responsive typography using `clamp()` for fluid sizing
- Content is fully editable through the WordPress block editor
