// About Section - Gutenberg Block
module.exports = function aboutBlock(images) {
  const capPPP = images['cap_public_private_partnerships.webp'] || '';

  return `<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"120px","bottom":"120px","left":"var:preset|spacing|50","right":"var:preset|spacing|50"}},"color":{"background":"#f9fafb"}},"layout":{"type":"constrained","contentSize":"1280px"}} -->
<div class="wp-block-group alignfull has-background" style="background-color:#f9fafb;padding-top:120px;padding-right:var(--wp--preset--spacing--50);padding-bottom:120px;padding-left:var(--wp--preset--spacing--50)"><!-- wp:columns {"style":{"spacing":{"blockGap":{"left":"80px"}}}} -->
<div class="wp-block-columns"><!-- wp:column {"width":"45%"} -->
<div class="wp-block-column" style="flex-basis:45%"><!-- wp:image {"sizeSlug":"large","style":{"border":{"radius":"24px"}}} -->
<figure class="wp-block-image size-large has-custom-border"><img src="${capPPP}" alt="Team collaborating on development projects" style="border-radius:24px"/></figure>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column {"width":"55%"} -->
<div class="wp-block-column" style="flex-basis:55%"><!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"600","letterSpacing":"0.05em","textTransform":"uppercase"},"color":{"text":"#059669","background":"#ecfdf5"},"spacing":{"padding":{"top":"8px","bottom":"8px","left":"16px","right":"16px"}},"border":{"radius":"9999px"}}} -->
<p style="border-radius:9999px;color:#059669;background-color:#ecfdf5;padding-top:8px;padding-right:16px;padding-bottom:8px;padding-left:16px;font-size:12px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase">● About Us</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"style":{"typography":{"fontSize":"clamp(2rem, 4vw, 3rem)","fontWeight":"700","lineHeight":"1.2"},"color":{"text":"#111827"},"spacing":{"margin":{"top":"24px","bottom":"24px"}}}} -->
<h2 class="wp-block-heading" style="color:#111827;margin-top:24px;margin-bottom:24px;font-size:clamp(2rem, 4vw, 3rem);font-weight:700;line-height:1.2">A Global Enterprise with<br><mark style="background-color:rgba(0, 0, 0, 0);color:#34d399" class="has-inline-color">African Expertise</mark></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"17px","lineHeight":"1.7"},"color":{"text":"#4b5563"},"spacing":{"margin":{"bottom":"32px"}}}} -->
<p style="color:#4b5563;margin-bottom:32px;font-size:17px;line-height:1.7">GPD Consulting is a distinguished global enterprise operating worldwide with deep expertise and specialized focus on Africa. With operations spanning America, Europe, and Africa, we bring world-class capabilities to drive sustainable economic development across the continent through strategic partnerships, resource development, and international trade.</p>
<!-- /wp:paragraph -->

<!-- wp:columns {"style":{"spacing":{"blockGap":{"left":"16px","top":"8px"}}}} -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:paragraph {"style":{"typography":{"fontSize":"14px"},"color":{"text":"#4b5563"},"spacing":{"margin":{"bottom":"8px"}}}} -->
<p style="color:#4b5563;margin-bottom:8px;font-size:14px">✅ Global enterprise with Africa expertise</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"14px"},"color":{"text":"#4b5563"},"spacing":{"margin":{"bottom":"8px"}}}} -->
<p style="color:#4b5563;margin-bottom:8px;font-size:14px">✅ Worldwide operations across 3 continents</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"14px"},"color":{"text":"#4b5563"},"spacing":{"margin":{"bottom":"8px"}}}} -->
<p style="color:#4b5563;margin-bottom:8px;font-size:14px">✅ Mining &amp; resource development</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"14px"},"color":{"text":"#4b5563"},"spacing":{"margin":{"bottom":"8px"}}}} -->
<p style="color:#4b5563;margin-bottom:8px;font-size:14px">✅ International trade &amp; commerce</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:paragraph {"style":{"typography":{"fontSize":"14px"},"color":{"text":"#4b5563"},"spacing":{"margin":{"bottom":"8px"}}}} -->
<p style="color:#4b5563;margin-bottom:8px;font-size:14px">✅ Public-Private Partnership expertise</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"14px"},"color":{"text":"#4b5563"},"spacing":{"margin":{"bottom":"8px"}}}} -->
<p style="color:#4b5563;margin-bottom:8px;font-size:14px">✅ Sustainable development focus</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"14px"},"color":{"text":"#4b5563"},"spacing":{"margin":{"bottom":"8px"}}}} -->
<p style="color:#4b5563;margin-bottom:8px;font-size:14px">✅ Technology transfer capabilities</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"14px"},"color":{"text":"#4b5563"},"spacing":{"margin":{"bottom":"8px"}}}} -->
<p style="color:#4b5563;margin-bottom:8px;font-size:14px">✅ Strategic infrastructure investments</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:buttons {"style":{"spacing":{"margin":{"top":"40px"}}}} -->
<div class="wp-block-buttons" style="margin-top:40px"><!-- wp:button {"style":{"typography":{"fontWeight":"600","fontSize":"15px"},"border":{"radius":"9999px"},"spacing":{"padding":{"top":"16px","bottom":"16px","left":"32px","right":"32px"}},"color":{"background":"#111827","text":"#ffffff"}}} -->
<div class="wp-block-button has-custom-font-size" style="font-size:15px;font-weight:600"><a class="wp-block-button__link has-text-color has-background wp-element-button" style="border-radius:9999px;color:#ffffff;background-color:#111827;padding-top:16px;padding-right:32px;padding-bottom:16px;padding-left:32px" href="/gdpconsults/about/">Learn More About Us ↗</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:spacer {"height":"64px"} -->
<div style="height:64px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:columns {"style":{"spacing":{"blockGap":{"left":"24px"}}}} -->
<div class="wp-block-columns"><!-- wp:column {"style":{"spacing":{"padding":{"top":"32px","bottom":"32px","left":"32px","right":"32px"}},"border":{"radius":"16px","width":"1px","color":"#e5e7eb"},"color":{"background":"#ffffff"}}} -->
<div class="wp-block-column has-background" style="border-color:#e5e7eb;border-width:1px;border-radius:16px;background-color:#ffffff;padding-top:32px;padding-right:32px;padding-bottom:32px;padding-left:32px"><!-- wp:paragraph {"style":{"typography":{"fontSize":"32px"},"spacing":{"margin":{"bottom":"16px"}}}} -->
<p style="margin-bottom:16px;font-size:32px">👥</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4,"style":{"typography":{"fontSize":"20px","fontWeight":"700"},"color":{"text":"#111827"},"spacing":{"margin":{"bottom":"12px"}}}} -->
<h4 class="wp-block-heading" style="color:#111827;margin-bottom:12px;font-size:20px;font-weight:700">Respect</h4>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"14px","lineHeight":"1.6"},"color":{"text":"#6b7280"}}} -->
<p style="color:#6b7280;font-size:14px;line-height:1.6">We value diverse perspectives and foster an inclusive environment.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column {"style":{"spacing":{"padding":{"top":"32px","bottom":"32px","left":"32px","right":"32px"}},"border":{"radius":"16px","width":"1px","color":"#e5e7eb"},"color":{"background":"#ffffff"}}} -->
<div class="wp-block-column has-background" style="border-color:#e5e7eb;border-width:1px;border-radius:16px;background-color:#ffffff;padding-top:32px;padding-right:32px;padding-bottom:32px;padding-left:32px"><!-- wp:paragraph {"style":{"typography":{"fontSize":"32px"},"spacing":{"margin":{"bottom":"16px"}}}} -->
<p style="margin-bottom:16px;font-size:32px">❤️</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4,"style":{"typography":{"fontSize":"20px","fontWeight":"700"},"color":{"text":"#111827"},"spacing":{"margin":{"bottom":"12px"}}}} -->
<h4 class="wp-block-heading" style="color:#111827;margin-bottom:12px;font-size:20px;font-weight:700">Trust</h4>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"14px","lineHeight":"1.6"},"color":{"text":"#6b7280"}}} -->
<p style="color:#6b7280;font-size:14px;line-height:1.6">We build robust relationships founded on reliability and accountability.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column {"style":{"spacing":{"padding":{"top":"32px","bottom":"32px","left":"32px","right":"32px"}},"border":{"radius":"16px","width":"1px","color":"#e5e7eb"},"color":{"background":"#ffffff"}}} -->
<div class="wp-block-column has-background" style="border-color:#e5e7eb;border-width:1px;border-radius:16px;background-color:#ffffff;padding-top:32px;padding-right:32px;padding-bottom:32px;padding-left:32px"><!-- wp:paragraph {"style":{"typography":{"fontSize":"32px"},"spacing":{"margin":{"bottom":"16px"}}}} -->
<p style="margin-bottom:16px;font-size:32px">🛡️</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4,"style":{"typography":{"fontSize":"20px","fontWeight":"700"},"color":{"text":"#111827"},"spacing":{"margin":{"bottom":"12px"}}}} -->
<h4 class="wp-block-heading" style="color:#111827;margin-bottom:12px;font-size:20px;font-weight:700">Integrity</h4>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"14px","lineHeight":"1.6"},"color":{"text":"#6b7280"}}} -->
<p style="color:#6b7280;font-size:14px;line-height:1.6">We conduct ourselves with unwavering integrity and ethical standards.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column {"style":{"spacing":{"padding":{"top":"32px","bottom":"32px","left":"32px","right":"32px"}},"border":{"radius":"16px","width":"1px","color":"#e5e7eb"},"color":{"background":"#ffffff"}}} -->
<div class="wp-block-column has-background" style="border-color:#e5e7eb;border-width:1px;border-radius:16px;background-color:#ffffff;padding-top:32px;padding-right:32px;padding-bottom:32px;padding-left:32px"><!-- wp:paragraph {"style":{"typography":{"fontSize":"32px"},"spacing":{"margin":{"bottom":"16px"}}}} -->
<p style="margin-bottom:16px;font-size:32px">🎯</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4,"style":{"typography":{"fontSize":"20px","fontWeight":"700"},"color":{"text":"#111827"},"spacing":{"margin":{"bottom":"12px"}}}} -->
<h4 class="wp-block-heading" style="color:#111827;margin-bottom:12px;font-size:20px;font-weight:700">Transparency</h4>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"14px","lineHeight":"1.6"},"color":{"text":"#6b7280"}}} -->
<p style="color:#6b7280;font-size:14px;line-height:1.6">We cultivate open communication in all our endeavors.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->`;
};
