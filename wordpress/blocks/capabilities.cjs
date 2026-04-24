// Capabilities Section - Gutenberg Block
module.exports = function capabilitiesBlock(images) {
  const capabilities = [
    { emoji: '🏛️', title: 'Governmental Affairs', desc: 'Navigating complex regulatory environments and fostering positive relationships with government entities.', link: '/gdpconsults/services/governmental-affairs/' },
    { emoji: '🤝', title: 'International Partnerships', desc: 'Forging mutually beneficial partnerships on an international scale.', link: '/gdpconsults/services/international-partnerships/' },
    { emoji: '📋', title: 'Project Development', desc: 'Strategizing and overseeing the full lifecycle of projects.', link: '/gdpconsults/services/project-development/' },
    { emoji: '💰', title: 'Project Finance', desc: 'Providing comprehensive financial solutions and arranging funding for capital-intensive initiatives.', link: '/gdpconsults/services/project-finance/' },
    { emoji: '💬', title: 'Negotiation', desc: 'Skillfully negotiating contracts, agreements, and deals.', link: '/gdpconsults/services/negotiation/' },
    { emoji: '🏗️', title: 'Architecture &amp; Engineering', desc: 'Delivering innovative architectural and engineering solutions.', link: '/gdpconsults/services/architecture-engineering/' },
    { emoji: '🌿', title: 'Green Technology', desc: 'Implementing sustainable and eco-friendly technologies for a better tomorrow.', link: '/gdpconsults/services/green-technology/' },
    { emoji: '📈', title: 'Economic Lobbying', desc: 'Advocating for economic interests and building strategic alliances.', link: '/gdpconsults/services/economic-lobbying/' },
    { emoji: '✈️', title: 'Aviation Industry', desc: 'Leveraging expertise to drive aviation-related projects forward.', link: '/gdpconsults/services/aviation-industry/' },
  ];

  const capCards = capabilities.map(cap => `<!-- wp:column {"style":{"spacing":{"padding":{"top":"32px","bottom":"32px","left":"32px","right":"32px"}},"border":{"radius":"16px","width":"1px","color":"#e5e7eb"},"color":{"background":"#f9fafb"}}} -->
<div class="wp-block-column has-background" style="border-color:#e5e7eb;border-width:1px;border-radius:16px;background-color:#f9fafb;padding-top:32px;padding-right:32px;padding-bottom:32px;padding-left:32px"><!-- wp:paragraph {"style":{"typography":{"fontSize":"32px"},"spacing":{"margin":{"bottom":"16px"}}}} -->
<p style="margin-bottom:16px;font-size:32px">${cap.emoji}</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4,"style":{"typography":{"fontSize":"18px","fontWeight":"700"},"color":{"text":"#111827"},"spacing":{"margin":{"bottom":"12px"}}}} -->
<h4 class="wp-block-heading" style="color:#111827;margin-bottom:12px;font-size:18px;font-weight:700">${cap.title}</h4>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"14px","lineHeight":"1.6"},"color":{"text":"#6b7280"}}} -->
<p style="color:#6b7280;font-size:14px;line-height:1.6">${cap.desc}</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->`).join('\n\n');

  // Split into 3 rows of 3
  const row1 = capabilities.slice(0, 3).map(cap => buildCapCard(cap)).join('\n\n');
  const row2 = capabilities.slice(3, 6).map(cap => buildCapCard(cap)).join('\n\n');
  const row3 = capabilities.slice(6, 9).map(cap => buildCapCard(cap)).join('\n\n');

  return `<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"120px","bottom":"120px","left":"var:preset|spacing|50","right":"var:preset|spacing|50"}},"color":{"background":"#ffffff"}},"layout":{"type":"constrained","contentSize":"1280px"}} -->
<div class="wp-block-group alignfull has-background" style="background-color:#ffffff;padding-top:120px;padding-right:var(--wp--preset--spacing--50);padding-bottom:120px;padding-left:var(--wp--preset--spacing--50)"><!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"12px","fontWeight":"600","letterSpacing":"0.05em","textTransform":"uppercase"},"color":{"text":"#059669","background":"#ecfdf5"},"spacing":{"padding":{"top":"8px","bottom":"8px","left":"16px","right":"16px"},"margin":{"bottom":"24px"}},"border":{"radius":"9999px"}}} -->
<p class="has-text-align-center" style="border-radius:9999px;color:#059669;background-color:#ecfdf5;padding-top:8px;padding-right:16px;padding-bottom:8px;padding-left:16px;margin-bottom:24px;font-size:12px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase">● Our Expertise</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textAlign":"center","style":{"typography":{"fontSize":"clamp(2rem, 4vw, 3rem)","fontWeight":"700"},"color":{"text":"#111827"},"spacing":{"margin":{"bottom":"24px"}}}} -->
<h2 class="wp-block-heading has-text-align-center" style="color:#111827;margin-bottom:24px;font-size:clamp(2rem, 4vw, 3rem);font-weight:700">Comprehensive Capabilities</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"17px","lineHeight":"1.7"},"color":{"text":"#4b5563"},"spacing":{"margin":{"bottom":"64px"}}}} -->
<p class="has-text-align-center" style="color:#4b5563;margin-bottom:64px;font-size:17px;line-height:1.7">We boast a diverse range of expertise to cater to our partners' specific needs, spanning from governmental affairs to project financing, mining operations, and international trade.</p>
<!-- /wp:paragraph -->

<!-- wp:columns {"style":{"spacing":{"blockGap":{"left":"24px","top":"24px"}}}} -->
<div class="wp-block-columns">${row1}</div>
<!-- /wp:columns -->

<!-- wp:columns {"style":{"spacing":{"blockGap":{"left":"24px","top":"24px"}}}} -->
<div class="wp-block-columns">${row2}</div>
<!-- /wp:columns -->

<!-- wp:columns {"style":{"spacing":{"blockGap":{"left":"24px","top":"24px"}}}} -->
<div class="wp-block-columns">${row3}</div>
<!-- /wp:columns -->

<!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"top":"48px"}}}} -->
<p class="has-text-align-center" style="margin-top:48px"><a href="/gdpconsults/services/" style="color:#059669;font-weight:600;text-decoration:none">View All Services ↗</a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->`;
};

function buildCapCard(cap) {
  return `<!-- wp:column {"style":{"spacing":{"padding":{"top":"32px","bottom":"32px","left":"32px","right":"32px"}},"border":{"radius":"16px","width":"1px","color":"#e5e7eb"},"color":{"background":"#f9fafb"}}} -->
<div class="wp-block-column has-background" style="border-color:#e5e7eb;border-width:1px;border-radius:16px;background-color:#f9fafb;padding-top:32px;padding-right:32px;padding-bottom:32px;padding-left:32px"><!-- wp:paragraph {"style":{"typography":{"fontSize":"32px"},"spacing":{"margin":{"bottom":"16px"}}}} -->
<p style="margin-bottom:16px;font-size:32px">${cap.emoji}</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4,"style":{"typography":{"fontSize":"18px","fontWeight":"700"},"color":{"text":"#111827"},"spacing":{"margin":{"bottom":"12px"}}}} -->
<h4 class="wp-block-heading" style="color:#111827;margin-bottom:12px;font-size:18px;font-weight:700">${cap.title}</h4>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"14px","lineHeight":"1.6"},"color":{"text":"#6b7280"}}} -->
<p style="color:#6b7280;font-size:14px;line-height:1.6">${cap.desc}</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->`;
}
