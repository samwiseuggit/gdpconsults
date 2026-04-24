// Projects Section - Gutenberg Block
module.exports = function projectsBlock(images) {
  const projAviation = images['project_aviation_panorama.webp'] || '';
  const projEnergy = images['cap_energy_sustainability.webp'] || '';
  const projHousing = images['cap_housing_urban.webp'] || '';

  return `<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"120px","bottom":"120px","left":"var:preset|spacing|50","right":"var:preset|spacing|50"}},"color":{"background":"#f9fafb"}},"layout":{"type":"constrained","contentSize":"1280px"}} -->
<div class="wp-block-group alignfull has-background" style="background-color:#f9fafb;padding-top:120px;padding-right:var(--wp--preset--spacing--50);padding-bottom:120px;padding-left:var(--wp--preset--spacing--50)"><!-- wp:columns {"style":{"spacing":{"margin":{"bottom":"48px"}}}} -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"600","letterSpacing":"0.05em","textTransform":"uppercase"},"color":{"text":"#059669","background":"#ecfdf5"},"spacing":{"padding":{"top":"8px","bottom":"8px","left":"16px","right":"16px"},"margin":{"bottom":"16px"}},"border":{"radius":"9999px"}}} -->
<p style="border-radius:9999px;color:#059669;background-color:#ecfdf5;padding-top:8px;padding-right:16px;padding-bottom:8px;padding-left:16px;margin-bottom:16px;font-size:12px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase">● Featured Projects</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"style":{"typography":{"fontSize":"clamp(2rem, 4vw, 3rem)","fontWeight":"700"},"color":{"text":"#111827"}}} -->
<h2 class="wp-block-heading" style="color:#111827;font-size:clamp(2rem, 4vw, 3rem);font-weight:700">Transformative <mark style="background-color:rgba(0, 0, 0, 0);color:#34d399" class="has-inline-color">Initiatives</mark></h2>
<!-- /wp:heading --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"bottom","width":"auto"} -->
<div class="wp-block-column is-vertically-aligned-bottom"><!-- wp:paragraph {"align":"right","style":{"spacing":{"margin":{"bottom":"0px"}}}} -->
<p class="has-text-align-right" style="margin-bottom:0px"><a href="/gdpconsults/projects/" style="color:#059669;font-weight:600;text-decoration:none">View All Projects ↗</a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:columns {"style":{"spacing":{"blockGap":{"left":"32px"}}}} -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"style":{"border":{"radius":"24px","width":"1px","color":"#e5e7eb"},"color":{"background":"#ffffff"},"spacing":{"padding":{"top":"0px","bottom":"0px","left":"0px","right":"0px"}}},"layout":{"type":"default"}} -->
<div class="wp-block-group has-background" style="border-color:#e5e7eb;border-width:1px;border-radius:24px;background-color:#ffffff;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px"><!-- wp:cover {"url":"${projAviation}","dimRatio":40,"overlayColor":"black","minHeight":250,"style":{"border":{"radius":{"topLeft":"24px","topRight":"24px"}}}} -->
<div class="wp-block-cover" style="border-top-left-radius:24px;border-top-right-radius:24px;min-height:250px"><span aria-hidden="true" class="wp-block-cover__background has-black-background-color has-background-dim-40 has-background-dim"></span><img class="wp-block-cover__image-background" alt="Aviation infrastructure project" src="${projAviation}" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:group {"layout":{"type":"flex","justifyContent":"space-between","verticalAlignment":"bottom"}} -->
<div class="wp-block-group"><!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"600"},"color":{"text":"#ffffff","background":"#10b981"},"spacing":{"padding":{"top":"4px","bottom":"4px","left":"12px","right":"12px"}},"border":{"radius":"9999px"}}} -->
<p style="border-radius:9999px;color:#ffffff;background-color:#10b981;padding-top:4px;padding-right:12px;padding-bottom:4px;padding-left:12px;font-size:12px;font-weight:600">Aviation</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group"><!-- wp:paragraph {"style":{"typography":{"fontSize":"13px"},"color":{"text":"#ffffffcc"}}} -->
<p style="color:#ffffffcc;font-size:13px">📍 East Africa</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"13px"},"color":{"text":"#ffffffcc"}}} -->
<p style="color:#ffffffcc;font-size:13px">📅 Ongoing</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->

<!-- wp:group {"style":{"spacing":{"padding":{"top":"24px","bottom":"24px","left":"24px","right":"24px"}}},"layout":{"type":"default"}} -->
<div class="wp-block-group" style="padding-top:24px;padding-right:24px;padding-bottom:24px;padding-left:24px"><!-- wp:heading {"level":3,"style":{"typography":{"fontSize":"20px","fontWeight":"700"},"color":{"text":"#111827"}}} -->
<h3 class="wp-block-heading" style="color:#111827;font-size:20px;font-weight:700">Modernizing Aviation Infrastructure</h3>
<!-- /wp:heading --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"style":{"border":{"radius":"24px","width":"1px","color":"#e5e7eb"},"color":{"background":"#ffffff"},"spacing":{"padding":{"top":"0px","bottom":"0px","left":"0px","right":"0px"}}},"layout":{"type":"default"}} -->
<div class="wp-block-group has-background" style="border-color:#e5e7eb;border-width:1px;border-radius:24px;background-color:#ffffff;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px"><!-- wp:cover {"url":"${projEnergy}","dimRatio":40,"overlayColor":"black","minHeight":250,"style":{"border":{"radius":{"topLeft":"24px","topRight":"24px"}}}} -->
<div class="wp-block-cover" style="border-top-left-radius:24px;border-top-right-radius:24px;min-height:250px"><span aria-hidden="true" class="wp-block-cover__background has-black-background-color has-background-dim-40 has-background-dim"></span><img class="wp-block-cover__image-background" alt="Renewable energy project" src="${projEnergy}" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:group {"layout":{"type":"flex","justifyContent":"space-between","verticalAlignment":"bottom"}} -->
<div class="wp-block-group"><!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"600"},"color":{"text":"#ffffff","background":"#10b981"},"spacing":{"padding":{"top":"4px","bottom":"4px","left":"12px","right":"12px"}},"border":{"radius":"9999px"}}} -->
<p style="border-radius:9999px;color:#ffffff;background-color:#10b981;padding-top:4px;padding-right:12px;padding-bottom:4px;padding-left:12px;font-size:12px;font-weight:600">Energy</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group"><!-- wp:paragraph {"style":{"typography":{"fontSize":"13px"},"color":{"text":"#ffffffcc"}}} -->
<p style="color:#ffffffcc;font-size:13px">📍 West Africa</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"13px"},"color":{"text":"#ffffffcc"}}} -->
<p style="color:#ffffffcc;font-size:13px">📅 Completed</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->

<!-- wp:group {"style":{"spacing":{"padding":{"top":"24px","bottom":"24px","left":"24px","right":"24px"}}},"layout":{"type":"default"}} -->
<div class="wp-block-group" style="padding-top:24px;padding-right:24px;padding-bottom:24px;padding-left:24px"><!-- wp:heading {"level":3,"style":{"typography":{"fontSize":"20px","fontWeight":"700"},"color":{"text":"#111827"}}} -->
<h3 class="wp-block-heading" style="color:#111827;font-size:20px;font-weight:700">Renewable Energy Initiative</h3>
<!-- /wp:heading --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"style":{"border":{"radius":"24px","width":"1px","color":"#e5e7eb"},"color":{"background":"#ffffff"},"spacing":{"padding":{"top":"0px","bottom":"0px","left":"0px","right":"0px"}}},"layout":{"type":"default"}} -->
<div class="wp-block-group has-background" style="border-color:#e5e7eb;border-width:1px;border-radius:24px;background-color:#ffffff;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px"><!-- wp:cover {"url":"${projHousing}","dimRatio":40,"overlayColor":"black","minHeight":250,"style":{"border":{"radius":{"topLeft":"24px","topRight":"24px"}}}} -->
<div class="wp-block-cover" style="border-top-left-radius:24px;border-top-right-radius:24px;min-height:250px"><span aria-hidden="true" class="wp-block-cover__background has-black-background-color has-background-dim-40 has-background-dim"></span><img class="wp-block-cover__image-background" alt="Housing development project" src="${projHousing}" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:group {"layout":{"type":"flex","justifyContent":"space-between","verticalAlignment":"bottom"}} -->
<div class="wp-block-group"><!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"600"},"color":{"text":"#ffffff","background":"#10b981"},"spacing":{"padding":{"top":"4px","bottom":"4px","left":"12px","right":"12px"}},"border":{"radius":"9999px"}}} -->
<p style="border-radius:9999px;color:#ffffff;background-color:#10b981;padding-top:4px;padding-right:12px;padding-bottom:4px;padding-left:12px;font-size:12px;font-weight:600">Housing</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group"><!-- wp:paragraph {"style":{"typography":{"fontSize":"13px"},"color":{"text":"#ffffffcc"}}} -->
<p style="color:#ffffffcc;font-size:13px">📍 Central Africa</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"13px"},"color":{"text":"#ffffffcc"}}} -->
<p style="color:#ffffffcc;font-size:13px">📅 Ongoing</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->

<!-- wp:group {"style":{"spacing":{"padding":{"top":"24px","bottom":"24px","left":"24px","right":"24px"}}},"layout":{"type":"default"}} -->
<div class="wp-block-group" style="padding-top:24px;padding-right:24px;padding-bottom:24px;padding-left:24px"><!-- wp:heading {"level":3,"style":{"typography":{"fontSize":"20px","fontWeight":"700"},"color":{"text":"#111827"}}} -->
<h3 class="wp-block-heading" style="color:#111827;font-size:20px;font-weight:700">Affordable Housing Development</h3>
<!-- /wp:heading --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->`;
};
