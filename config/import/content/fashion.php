<?php
/**
 * Monochrome Pro homepage.
 *
 * Homepage content optionally installed after theme activation.
 *
 * Visit `/wp-admin/admin.php?page=genesis-getting-started` to trigger import.
 *
 * @package Monochrome
 * @author  StudioPress
 * @license GPL-2.0-or-later
 * @link    https://my.studiopress.com/themes/monochrome/
 */

// Images by Flaunter.com on Unsplash: https://unsplash.com/photos/RC7bYyG5PUs.
$local695_homepage_background1 = CHILD_URL . '/config/import/images/fashion/fashion-background-1.jpg';
$local695_homepage_background2 = CHILD_URL . '/config/import/images/fashion/fashion-background-2.jpg';

// Placeholder logos.
$local695_homepage_logos = [
	1 => CHILD_URL . '/config/import/images/logos/les-avenirs.png',
	2 => CHILD_URL . '/config/import/images/logos/avec-simple.png',
	3 => CHILD_URL . '/config/import/images/logos/whitespace.png',
	4 => CHILD_URL . '/config/import/images/logos/minimalism.png',
	5 => CHILD_URL . '/config/import/images/logos/barcelona-33.png',
	6 => CHILD_URL . '/config/import/images/logos/smooth-vanilla.png',
];

return <<<CONTENT
<!-- wp:atomic-blocks/ab-container {"containerPaddingTop":30,"containerPaddingRight":8,"containerPaddingBottom":30,"containerPaddingLeft":8,"containerWidth":"full","containerMaxWidth":1200,"containerBackgroundColor":"#000000","containerImgID":907,"containerDimRatio":20,"className":"narrow-content light-text"} -->
<div style="background-color:#000000;padding-left:8%;padding-right:8%;padding-bottom:30%;padding-top:30%" class="wp-block-atomic-blocks-ab-container narrow-content light-text ab-block-container alignfull"><div class="ab-container-inside"><div class="ab-container-image-wrap"><img class="ab-container-image has-background-dim-20 has-background-dim" src="{$local695_homepage_background1}" alt=""/></div><div class="ab-container-content" style="max-width:1200px"><!-- wp:heading {"level":1,"align":"left","className":"bold-heading-text fade-in-up"} -->
<h1 style="text-align:left" class="bold-heading-text fade-in-up">The premier fashion agency.</h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"customTextColor":"#ffffff","fontSize":"small","className":"fade-in-up"} -->
<p style="color:#ffffff" class="has-text-color has-small-font-size fade-in-up"><strong>Monochrome</strong> is a world-class modeling and talent collective representing all. We are based out of Los Angeles and have several locations in Europe.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:atomic-blocks/ab-container -->

<!-- wp:atomic-blocks/ab-container {"containerPaddingTop":10,"containerPaddingRight":8,"containerPaddingBottom":10,"containerPaddingLeft":8,"containerWidth":"full","containerMaxWidth":1200} -->
<div style="padding-left:8%;padding-right:8%;padding-bottom:10%;padding-top:10%" class="wp-block-atomic-blocks-ab-container ab-block-container alignfull"><div class="ab-container-inside"><div class="ab-container-content" style="max-width:1200px"><!-- wp:heading {"className":"bold-text fade-in-up"} -->
<h2 class="bold-text fade-in-up">Style matters.</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":"fade-in-up"} -->
<p class="fade-in-up">We rise above the competition and leave you speechless.</p>
<!-- /wp:paragraph -->

<!-- wp:separator {"className":"is-style-default fade-in-up"} -->
<hr class="wp-block-separator is-style-default fade-in-up"/>
<!-- /wp:separator -->

<!-- wp:columns {"columns":3,"className":"fade-in-up"} -->
<div class="wp-block-columns has-3-columns fade-in-up"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"level":3} -->
<h3>WOMEN’S FASHION</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"customFontSize":16} -->
<p style="font-size:16px">Our professional team will find the perfect outfit for the perfect occasion and serve an experience so unbelievably desirable.</p>
<!-- /wp:paragraph -->

<!-- wp:button {"customBackgroundColor":"#000000"} -->
<div class="wp-block-button"><a class="wp-block-button__link has-background" href="#" style="background-color:#000000">Learn More</a></div>
<!-- /wp:button --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"level":3} -->
<h3>MEN’S FASHION</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"customFontSize":16} -->
<p style="font-size:16px">Our professional team will work with the best designers in the field to make you look handsome and nothing short of amazing.</p>
<!-- /wp:paragraph -->

<!-- wp:button {"customBackgroundColor":"#000000"} -->
<div class="wp-block-button"><a class="wp-block-button__link has-background" href="#" style="background-color:#000000">Learn more </a></div>
<!-- /wp:button --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"level":3} -->
<h3>KID’S FASHION</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"customFontSize":16} -->
<p style="font-size:16px">Our professional team will work with your child and create an ensemble that will spark joy and make them walk confidently.</p>
<!-- /wp:paragraph -->

<!-- wp:button {"customBackgroundColor":"#000000"} -->
<div class="wp-block-button"><a class="wp-block-button__link has-background" href="#" style="background-color:#000000">Learn More</a></div>
<!-- /wp:button --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div></div></div>
<!-- /wp:atomic-blocks/ab-container -->

<!-- wp:atomic-blocks/ab-container {"containerPaddingTop":15,"containerPaddingRight":8,"containerPaddingBottom":15,"containerPaddingLeft":8,"containerWidth":"full","containerMaxWidth":1200,"containerBackgroundColor":"#000000","containerImgID":910,"containerDimRatio":20,"className":"light-text"} -->
<div style="background-color:#000000;padding-left:8%;padding-right:8%;padding-bottom:15%;padding-top:15%" class="wp-block-atomic-blocks-ab-container light-text ab-block-container alignfull"><div class="ab-container-inside"><div class="ab-container-image-wrap"><img class="ab-container-image has-background-dim-20 has-background-dim" src="{$local695_homepage_background2}" alt=""/></div><div class="ab-container-content" style="max-width:1200px"><!-- wp:heading {"align":"left","className":"bold-text fade-in-up"} -->
<h2 style="text-align:left" class="bold-text fade-in-up">We design brands.</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"customTextColor":"#ffffff","className":"fade-in-up"} -->
<p style="color:#ffffff" class="has-text-color fade-in-up">A simple look is all you need to crush your competition.</p>
<!-- /wp:paragraph -->

<!-- wp:separator {"className":"is-style-default fade-in-up"} -->
<hr class="wp-block-separator is-style-default fade-in-up"/>
<!-- /wp:separator -->

<!-- wp:columns {"columns":6,"className":"fade-in-up brand-logos"} -->
<div class="wp-block-columns has-6-columns fade-in-up brand-logos"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"id":882,"width":180} -->
<figure class="wp-block-image is-resized"><img src="{$local695_homepage_logos[1]}" alt="" class="wp-image-882" width="180"/></figure>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"id":870,"width":180} -->
<figure class="wp-block-image is-resized"><img src="{$local695_homepage_logos[2]}" alt="" class="wp-image-870" width="180"/></figure>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"id":892,"width":180} -->
<figure class="wp-block-image is-resized"><img src="{$local695_homepage_logos[3]}" alt="" class="wp-image-892" width="180"/></figure>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"id":877,"width":180} -->
<figure class="wp-block-image is-resized"><img src="{$local695_homepage_logos[4]}" alt="" class="wp-image-877" width="180"/></figure>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"id":883,"width":180} -->
<figure class="wp-block-image is-resized"><img src="{$local695_homepage_logos[5]}" alt="" class="wp-image-883" width="180"/></figure>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"id":891,"width":180} -->
<figure class="wp-block-image is-resized"><img src="{$local695_homepage_logos[6]}" alt="" class="wp-image-891" width="180"/></figure>
<!-- /wp:image --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div></div></div>
<!-- /wp:atomic-blocks/ab-container -->

<!-- wp:atomic-blocks/ab-container {"containerPaddingTop":10,"containerPaddingRight":8,"containerPaddingBottom":2,"containerPaddingLeft":8,"containerWidth":"full","containerMaxWidth":1200} -->
<div style="padding-left:8%;padding-right:8%;padding-bottom:2%;padding-top:10%" class="wp-block-atomic-blocks-ab-container ab-block-container alignfull"><div class="ab-container-inside"><div class="ab-container-content" style="max-width:1200px"><!-- wp:heading {"className":"bold-text fade-in-up"} -->
<h2 class="bold-text fade-in-up">We create stories.</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":"fade-in-up"} -->
<p class="fade-in-up">A killer narrative will turn your readers into raving fans.</p>
<!-- /wp:paragraph -->

<!-- wp:separator {"className":"fade-in-up"} -->
<hr class="wp-block-separator fade-in-up"/>
<!-- /wp:separator -->

<!-- wp:atomic-blocks/ab-spacer -->
<div style="color:#ddd" class="wp-block-atomic-blocks-ab-spacer ab-block-spacer ab-divider-solid ab-divider-size-1"><hr style="height:30px"/></div>
<!-- /wp:atomic-blocks/ab-spacer -->

<!-- wp:atomic-blocks/ab-post-grid {"className":"fade-in-up","postsToShow":4,"displayPostExcerpt":false,"displayPostLink":false,"imageSize":"featured-blog"} /--></div></div></div>
<!-- /wp:atomic-blocks/ab-container -->
CONTENT;
