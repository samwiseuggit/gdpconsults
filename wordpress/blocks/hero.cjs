// Hero Section - Gutenberg Block
module.exports = function heroBlock(images) {
  const heroImg = images['hero_airport_terminal.webp'] || '';
  
  return `<!-- wp:cover {"url":"${heroImg}","dimRatio":85,"overlayColor":"black","isUserOverlayColor":true,"minHeight":100,"minHeightUnit":"vh","align":"full","style":{"spacing":{"padding":{"top":"160px","bottom":"120px","left":"var:preset|spacing|50","right":"var:preset|spacing|50"}}}} -->
<div class="wp-block-cover alignfull" style="min-height:100vh;padding-top:160px;padding-right:var(--wp--preset--spacing--50);padding-bottom:120px;padding-left:var(--wp--preset--spacing--50)"><span aria-hidden="true" class="wp-block-cover__background has-black-background-color has-background-dim-80 has-background-dim"></span><img class="wp-block-cover__image-background" alt="Modern infrastructure" src="${heroImg}" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:group {"layout":{"type":"constrained","contentSize":"1280px"}} -->
<div class="wp-block-group"><!-- wp:columns {"style":{"spacing":{"blockGap":{"left":"64px"}}}} -->
<div class="wp-block-columns"><!-- wp:column {"width":"58%"} -->
<div class="wp-block-column" style="flex-basis:58%"><!-- wp:paragraph {"style":{"typography":{"fontSize":"14px","fontWeight":"500","letterSpacing":"0.05em"},"color":{"text":"#34d399"},"spacing":{"padding":{"top":"8px","bottom":"8px","left":"20px","right":"20px"},"margin":{"bottom":"32px"}},"border":{"radius":"9999px","width":"1px","color":"#ffffff1a"},"color":{"background":"#0000004d"}}} -->
<p class="has-text-color has-background" style="border-color:#ffffff1a;border-width:1px;border-radius:9999px;color:#34d399;background-color:#0000004d;padding-top:8px;padding-right:20px;padding-bottom:8px;padding-left:20px;margin-bottom:32px;font-size:14px;font-weight:500;letter-spacing:0.05em">● Global Enterprise • Africa Focus</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"style":{"typography":{"fontSize":"clamp(2.5rem, 5vw, 4.5rem)","fontWeight":"800","lineHeight":"1.1"},"color":{"text":"#ffffff"},"spacing":{"margin":{"bottom":"32px"}}}} -->
<h1 class="wp-block-heading" style="color:#ffffff;margin-bottom:32px;font-size:clamp(2.5rem, 5vw, 4.5rem);font-weight:800;line-height:1.1">Global Partnerships<br>That Transform<br><mark style="background-color:rgba(0, 0, 0, 0);color:#34d399" class="has-inline-color">African Economies</mark></h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"18px","lineHeight":"1.7"},"color":{"text":"#9ca3af"},"spacing":{"margin":{"bottom":"40px"}}}} -->
<p style="color:#9ca3af;margin-bottom:40px;font-size:18px;line-height:1.7">A distinguished global enterprise operating worldwide with deep expertise and specialized focus on driving sustainable economic development across Africa.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"style":{"spacing":{"blockGap":"16px"}}} -->
<div class="wp-block-buttons"><!-- wp:button {"style":{"typography":{"fontWeight":"600","fontSize":"16px"},"border":{"radius":"9999px"},"spacing":{"padding":{"top":"16px","bottom":"16px","left":"32px","right":"32px"}},"color":{"background":"#10b981","text":"#ffffff"}}} -->
<div class="wp-block-button has-custom-font-size" style="font-size:16px;font-weight:600"><a class="wp-block-button__link has-text-color has-background wp-element-button" style="border-radius:9999px;color:#ffffff;background-color:#10b981;padding-top:16px;padding-right:32px;padding-bottom:16px;padding-left:32px" href="/gdpconsults/contact/">Start Your Project →</a></div>
<!-- /wp:button -->

<!-- wp:button {"style":{"typography":{"fontWeight":"600","fontSize":"16px"},"border":{"radius":"9999px","width":"2px","color":"#ffffff4d"},"spacing":{"padding":{"top":"16px","bottom":"16px","left":"32px","right":"32px"}},"color":{"text":"#ffffff","background":"transparent"}}} -->
<div class="wp-block-button has-custom-font-size" style="font-size:16px;font-weight:600"><a class="wp-block-button__link has-text-color has-background wp-element-button" style="border-color:#ffffff4d;border-width:2px;border-radius:9999px;color:#ffffff;background-color:transparent;padding-top:16px;padding-right:32px;padding-bottom:16px;padding-left:32px" href="/gdpconsults/services/">Explore Our Services ↗</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:column -->

<!-- wp:column {"width":"42%"} -->
<div class="wp-block-column" style="flex-basis:42%"><!-- wp:group {"style":{"spacing":{"padding":{"top":"24px","bottom":"24px","left":"24px","right":"24px"}},"border":{"radius":"24px","width":"1px","color":"#ffffff1a"},"color":{"background":"#ffffff0d"}},"layout":{"type":"default"}} -->
<div class="wp-block-group has-background" style="border-color:#ffffff1a;border-width:1px;border-radius:24px;background-color:#ffffff0d;padding-top:24px;padding-right:24px;padding-bottom:24px;padding-left:24px"><!-- wp:columns {"style":{"spacing":{"blockGap":{"left":"16px","top":"16px"}}}} -->
<div class="wp-block-columns"><!-- wp:column {"style":{"spacing":{"padding":{"top":"16px","bottom":"16px","left":"16px","right":"16px"}},"border":{"radius":"16px"},"color":{"background":"#ffffff0d"}}} -->
<div class="wp-block-column has-background" style="border-radius:16px;background-color:#ffffff0d;padding-top:16px;padding-right:16px;padding-bottom:16px;padding-left:16px"><!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"30px","fontWeight":"700"},"color":{"text":"#34d399"},"spacing":{"margin":{"bottom":"4px"}}}} -->
<p class="has-text-align-center" style="color:#34d399;margin-bottom:4px;font-size:30px;font-weight:700">15+</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"13px"},"color":{"text":"#9ca3af"}}} -->
<p class="has-text-align-center" style="color:#9ca3af;font-size:13px">Years Experience</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column {"style":{"spacing":{"padding":{"top":"16px","bottom":"16px","left":"16px","right":"16px"}},"border":{"radius":"16px"},"color":{"background":"#ffffff0d"}}} -->
<div class="wp-block-column has-background" style="border-radius:16px;background-color:#ffffff0d;padding-top:16px;padding-right:16px;padding-bottom:16px;padding-left:16px"><!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"30px","fontWeight":"700"},"color":{"text":"#34d399"},"spacing":{"margin":{"bottom":"4px"}}}} -->
<p class="has-text-align-center" style="color:#34d399;margin-bottom:4px;font-size:30px;font-weight:700">50+</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"13px"},"color":{"text":"#9ca3af"}}} -->
<p class="has-text-align-center" style="color:#9ca3af;font-size:13px">Global Partners</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:columns {"style":{"spacing":{"blockGap":{"left":"16px","top":"16px"}}}} -->
<div class="wp-block-columns"><!-- wp:column {"style":{"spacing":{"padding":{"top":"16px","bottom":"16px","left":"16px","right":"16px"}},"border":{"radius":"16px"},"color":{"background":"#ffffff0d"}}} -->
<div class="wp-block-column has-background" style="border-radius:16px;background-color:#ffffff0d;padding-top:16px;padding-right:16px;padding-bottom:16px;padding-left:16px"><!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"30px","fontWeight":"700"},"color":{"text":"#34d399"},"spacing":{"margin":{"bottom":"4px"}}}} -->
<p class="has-text-align-center" style="color:#34d399;margin-bottom:4px;font-size:30px;font-weight:700">3</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"13px"},"color":{"text":"#9ca3af"}}} -->
<p class="has-text-align-center" style="color:#9ca3af;font-size:13px">Continents</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column {"style":{"spacing":{"padding":{"top":"16px","bottom":"16px","left":"16px","right":"16px"}},"border":{"radius":"16px"},"color":{"background":"#ffffff0d"}}} -->
<div class="wp-block-column has-background" style="border-radius:16px;background-color:#ffffff0d;padding-top:16px;padding-right:16px;padding-bottom:16px;padding-left:16px"><!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"30px","fontWeight":"700"},"color":{"text":"#34d399"},"spacing":{"margin":{"bottom":"4px"}}}} -->
<p class="has-text-align-center" style="color:#34d399;margin-bottom:4px;font-size:30px;font-weight:700">$100M+</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"13px"},"color":{"text":"#9ca3af"}}} -->
<p class="has-text-align-center" style="color:#9ca3af;font-size:13px">Project Value</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"padding":{"top":"16px","bottom":"16px","left":"24px","right":"24px"},"margin":{"top":"24px"}},"border":{"radius":"16px","width":"1px","color":"#ffffff1a"},"color":{"background":"#ffffff0d"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group has-background" style="border-color:#ffffff1a;border-width:1px;border-radius:16px;background-color:#ffffff0d;margin-top:24px;padding-top:16px;padding-right:24px;padding-bottom:16px;padding-left:24px"><!-- wp:paragraph {"style":{"typography":{"fontSize":"15px","fontWeight":"600"},"color":{"text":"#ffffff"}}} -->
<p style="color:#ffffff;font-size:15px;font-weight:600">▶ <a href="https://youtu.be/jmRDmi5NxD8" target="_blank" rel="noreferrer noopener" style="color:#ffffff">Watch Our Story</a> <span style="color:#9ca3af;font-weight:400;font-size:13px">1:17 min video</span></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->`;
};
