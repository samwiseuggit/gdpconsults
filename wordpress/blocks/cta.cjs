// CTA Section - Gutenberg Block
module.exports = function ctaBlock(images) {
  return `<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"120px","bottom":"120px","left":"var:preset|spacing|50","right":"var:preset|spacing|50"}},"color":{"background":"#030712"}},"layout":{"type":"constrained","contentSize":"800px"}} -->
<div class="wp-block-group alignfull has-background" style="background-color:#030712;padding-top:120px;padding-right:var(--wp--preset--spacing--50);padding-bottom:120px;padding-left:var(--wp--preset--spacing--50)"><!-- wp:heading {"textAlign":"center","style":{"typography":{"fontSize":"clamp(2rem, 4vw, 3.5rem)","fontWeight":"700","lineHeight":"1.2"},"color":{"text":"#ffffff"},"spacing":{"margin":{"bottom":"24px"}}}} -->
<h2 class="wp-block-heading has-text-align-center" style="color:#ffffff;margin-bottom:24px;font-size:clamp(2rem, 4vw, 3.5rem);font-weight:700;line-height:1.2">Ready to Transform <mark style="background-color:rgba(0, 0, 0, 0);color:#34d399" class="has-inline-color">Your Vision?</mark></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"18px","lineHeight":"1.7"},"color":{"text":"#9ca3af"},"spacing":{"margin":{"bottom":"40px"}}}} -->
<p class="has-text-align-center" style="color:#9ca3af;margin-bottom:40px;font-size:18px;line-height:1.7">Let's discuss how GPD Consulting can help you achieve your development goals.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"blockGap":"16px"}}} -->
<div class="wp-block-buttons"><!-- wp:button {"style":{"typography":{"fontWeight":"600","fontSize":"16px"},"border":{"radius":"9999px"},"spacing":{"padding":{"top":"16px","bottom":"16px","left":"32px","right":"32px"}},"color":{"background":"#10b981","text":"#ffffff"}}} -->
<div class="wp-block-button has-custom-font-size" style="font-size:16px;font-weight:600"><a class="wp-block-button__link has-text-color has-background wp-element-button" style="border-radius:9999px;color:#ffffff;background-color:#10b981;padding-top:16px;padding-right:32px;padding-bottom:16px;padding-left:32px" href="/gdpconsults/contact/">Start Your Project →</a></div>
<!-- /wp:button -->

<!-- wp:button {"style":{"typography":{"fontWeight":"600","fontSize":"16px"},"border":{"radius":"9999px","width":"1px","color":"#ffffff33"},"spacing":{"padding":{"top":"16px","bottom":"16px","left":"32px","right":"32px"}},"color":{"text":"#ffffff","background":"transparent"}}} -->
<div class="wp-block-button has-custom-font-size" style="font-size:16px;font-weight:600"><a class="wp-block-button__link has-text-color has-background wp-element-button" style="border-color:#ffffff33;border-width:1px;border-radius:9999px;color:#ffffff;background-color:transparent;padding-top:16px;padding-right:32px;padding-bottom:16px;padding-left:32px" href="tel:+14166175638">📞 Call Us</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group -->`;
};
