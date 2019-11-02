<?php
/**
 * Monochrome Pro.
 *
 * This file adds functions to the Monochrome Pro Theme.
 *
 * @package Monochrome
 * @author  StudioPress
 * @license GPL-2.0-or-later
 * @link    https://my.studiopress.com/themes/monochrome/
 */

// Starts the engine.
require_once get_template_directory() . '/lib/init.php';

// Setup Theme.
require_once get_stylesheet_directory() . '/lib/theme-defaults.php';

add_action( 'after_setup_theme', 'local695_localization_setup' );
/**
 * Sets localization (do not remove).
 *
 * @since 1.0.0
 */
function local695_localization_setup() {

	load_child_theme_textdomain( 'local695', get_stylesheet_directory() . '/languages' );

}

// Adds the theme helper functions.
require_once get_stylesheet_directory() . '/lib/helper-functions.php';

// Adds Image upload and Color select to WordPress Theme Customizer.
require_once get_stylesheet_directory() . '/lib/customize.php';

// Includes Customizer CSS.
require_once get_stylesheet_directory() . '/lib/output.php';

// Adds WooCommerce support.
require_once get_stylesheet_directory() . '/lib/woocommerce/woocommerce-setup.php';

// Includes the Customizer CSS for the WooCommerce plugin.
require_once get_stylesheet_directory() . '/lib/woocommerce/woocommerce-output.php';

// Includes notice to install Genesis Connect for WooCommerce.
require_once get_stylesheet_directory() . '/lib/woocommerce/woocommerce-notice.php';

add_action( 'after_setup_theme', 'local695_theme_support', 1 );
/**
 * Add desired theme supports.
 *
 * See config file at `config/theme-supports.php`.
 *
 * @since 1.3.0
 */
function local695_theme_support() {

	$theme_supports = genesis_get_config( 'theme-supports' );

	foreach ( $theme_supports as $feature => $args ) {
		add_theme_support( $feature, $args );
	}

}

add_action( 'after_setup_theme', 'genesis_child_gutenberg_support' );
/**
 * Adds Gutenberg opt-in features and styling.
 *
 * Allows plugins to Removes support if required.
 *
 * @since 1.1.0
 */
function genesis_child_gutenberg_support() { // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedFunctionFound -- using same in all child themes to allow action to be unhooked.
	require_once get_stylesheet_directory() . '/lib/gutenberg/init.php';
}

add_action( 'wp_enqueue_scripts', 'local695_enqueue_scripts_styles' );
/**
 * Enqueues scripts and styles.
 *
 * @since 1.0.0
 */
function local695_enqueue_scripts_styles() {

	wp_enqueue_style( 'local695-fonts', '//fonts.googleapis.com/css?family=Muli:300,300i,400,400i,600,600i|Open+Sans+Condensed:300', [], genesis_get_theme_version() );
	wp_enqueue_style( 'adobe-fonts', '//use.typekit.net/ymg4agg.css', [], genesis_get_theme_version() );
	// wp_enqueue_style( 'local695-ionicons', 'https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js', [], genesis_get_theme_version() );
	wp_enqueue_style( 'main-css', get_stylesheet_directory_uri() . '/assets/main.css', [], null );

	wp_enqueue_script( 'local695-global-script', get_stylesheet_directory_uri() . '/assets/global.js', [ 'jquery' ], null, true );
	wp_enqueue_script( 'local695-block-effects', get_stylesheet_directory_uri() . '/assets/block-effects.js', [], null, true );

	$suffix = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min';

	// wp_enqueue_script( 'local695-responsive-menu', get_stylesheet_directory_uri() . '/assets/responsive-menus' . $suffix . '.js', [ 'jquery' ], null, true );
	wp_enqueue_script( 'local695-responsive-menu', get_stylesheet_directory_uri() . '/assets/responsive-menus.js', [ 'jquery' ], null, true );
	wp_localize_script( 'local695-responsive-menu', 'genesis_responsive_menu', local695_responsive_menu_settings() );

}

/**
 * Defines responsive menu settings.
 *
 * @since 1.1.0
 */
function local695_responsive_menu_settings() {

	$settings = [
		'mainMenu'         => __( 'Menu', 'local695' ),
		'menuIconClass'    => 'ionicons-before ion-navicon-round',
		'subMenu'          => __( 'Submenu', 'local695' ),
		'subMenuIconClass' => 'ionicons-before ion-ios-arrow-down',
		'menuClasses'      => [
			'combine' => [],
			'others'  => [
				'.nav-primary',
			],
		],
	];

	return $settings;

}

// Adds image sizes.
add_image_size( 'featured-blog', 600, 338, true );
add_image_size( 'sidebar-thumbnail', 80, 80, true );

add_filter( 'image_size_names_choose', 'local695_media_library_sizes' );
/**
 * Adds featured-blog image size to Media Library.
 *
 * @since 1.0.0
 *
 * @param array $sizes Array of image sizes and their names.
 * @return array The modified list of sizes.
 */
function local695_media_library_sizes( $sizes ) {

	$sizes['featured-blog'] = __( 'Featured Blog - 600px by 338px', 'local695' );

	return $sizes;

}

// Removes header right widget area.
unregister_sidebar( 'header-right' );

// Removes secondary sidebar.
unregister_sidebar( 'sidebar-alt' );

// Removes site layouts.
genesis_unregister_layout( 'content-sidebar-sidebar' );
genesis_unregister_layout( 'sidebar-content-sidebar' );
genesis_unregister_layout( 'sidebar-sidebar-content' );

// Repositions primary navigation menu.
remove_action( 'genesis_after_header', 'genesis_do_nav' );
add_action( 'genesis_header', 'genesis_do_nav', 12 );

// Repositions secondary navigation menu.
remove_action( 'genesis_after_header', 'genesis_do_subnav' );
add_action( 'genesis_after', 'genesis_do_subnav', 12 );

add_action( 'genesis_meta', 'local695_add_search_icon' );
/**
 * Adds the search icon to the header if the option is set in the Customizer.
 *
 * @since 1.0.0
 */
function local695_add_search_icon() {

	$show_icon = get_theme_mod( 'local695_header_search', local695_customizer_get_default_search_setting() );

	// Exit early if option set to false.
	if ( ! $show_icon ) {
		return;
	}

	add_action( 'genesis_header', 'local695_do_header_search_form', 14 );
	add_filter( 'genesis_nav_items', 'local695_add_search_menu_item', 10, 2 );
	add_filter( 'wp_nav_menu_items', 'local695_add_search_menu_item', 10, 2 );

}

/**
 * Modifies the menu item output of the header menu.
 *
 * @since 1.0.0
 *
 * @param string $items The menu HTML.
 * @param array  $args The menu options.
 * @return string Updated menu HTML.
 */
function local695_add_search_menu_item( $items, $args ) {

	$search_toggle = sprintf( '<li class="menu-item">%s</li>', local695_get_header_search_toggle() );

	if ( 'primary' === $args->theme_location ) {
		$items .= $search_toggle;
	}

	return $items;

}

add_filter( 'wp_nav_menu_args', 'local695_secondary_menu_args' );
/**
 * Reduces secondary navigation menu to one level depth.
 *
 * @since 1.0.0
 *
 * @param array $args Original menu options.
 * @return array Menu options with depth set to 1.
 */
function local695_secondary_menu_args( $args ) {

	if ( 'secondary' !== $args['theme_location'] ) {
		return $args;
	}
	$args['depth'] = 1;
	return $args;

}

add_filter( 'genesis_author_box_gravatar_size', 'local695_author_box_gravatar' );
/**
 * Modifies size of the Gravatar in the author box.
 *
 * @since 1.0.0
 *
 * @param int $size Original icon size.
 * @return int Modified icon size.
 */
function local695_author_box_gravatar( $size ) {

	return 90;

}

add_filter( 'genesis_post_info', 'local695_entry_meta_header' );
/**
 * Modifies the meta information in the entry header.
 *
 * @since 1.0.0
 *
 * @param string $post_info Current post info.
 * @return string New post info.
 */
function local695_entry_meta_header( $post_info ) {

	$post_info = '[post_author_posts_link] &middot; [post_date] &middot; [post_comments] [post_edit]';
	return $post_info;

}

add_filter( 'genesis_post_meta', 'local695_entry_meta_footer' );
/**
 * Modifies the entry meta in the entry footer.
 *
 * @since 1.0.0
 *
 * @param string $post_meta Current post info.
 * @return string The new entry meta.
 */
function local695_entry_meta_footer( $post_meta ) {

	$post_meta = '[post_categories before=""] [post_tags before=""]';
	return $post_meta;

}

add_filter( 'genesis_comment_list_args', 'local695_comments_gravatar' );
/**
 * Modifies size of the Gravatar in the entry comments.
 *
 * @since 1.0.0
 *
 * @param array $args Gravatar settings.
 * @return array Gravatar settings with modified size.
 */
function local695_comments_gravatar( $args ) {

	$args['avatar_size'] = 48;
	return $args;

}

add_filter( 'get_the_content_limit', 'local695_content_limit_read_more_markup', 10, 3 );
/**
 * Modifies the generic more link markup for posts.
 *
 * @since 1.0.0
 *
 * @param string $output The current full HTML.
 * @param string $content The content HTML.
 * @param string $link The link HTML.
 * @return string The new more link HTML.
 */
function local695_content_limit_read_more_markup( $output, $content, $link ) {

	$output = sprintf( '<p>%s &#x02026;</p><p class="more-link-wrap">%s</p>', $content, str_replace( '&#x02026;', '', $link ) );

	return $output;

}

// Removes entry meta in entry footer.
remove_action( 'genesis_entry_footer', 'genesis_entry_footer_markup_open', 5 );
remove_action( 'genesis_entry_footer', 'genesis_post_meta' );
remove_action( 'genesis_entry_footer', 'genesis_entry_footer_markup_close', 15 );

add_action( 'genesis_before_footer', 'local695_before_footer_cta' );
/**
 * Hooks in before footer CTA widget area.
 *
 * @since 1.0.0
 */
function local695_before_footer_cta() {

	genesis_widget_area(
		'before-footer-cta',
		[
			'before' => '<div class="before-footer-cta"><div class="wrap">',
			'after'  => '</div></div>',
		]
	);

}

// Removes site footer.
remove_action( 'genesis_footer', 'genesis_footer_markup_open', 5 );
remove_action( 'genesis_footer', 'genesis_do_footer' );
remove_action( 'genesis_footer', 'genesis_footer_markup_close', 15 );

// Adds site footer.
add_action( 'genesis_after', 'genesis_footer_markup_open', 5 );
add_action( 'genesis_after', 'genesis_do_footer' );
add_action( 'genesis_after', 'genesis_footer_markup_close', 15 );

add_filter( 'genesis_after', 'local695_custom_footer_logo', 7 );
/**
 * Outputs the footer logo above the footer credits.
 *
 * @since 1.2.0
 */
function local695_custom_footer_logo() {

	$footer_logo      = get_theme_mod( 'local695-footer-logo', '' );
	$footer_logo_link = sprintf( '<p><a class="footer-logo-link" href="%1$s"><img class="footer-logo" src="%2$s" alt="%3$s" /></a></p>', trailingslashit( home_url() ), esc_url( $footer_logo ), get_bloginfo( 'name' ) );

	if ( $footer_logo ) {
		echo $footer_logo_link; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}

}

// Registers widget areas.
genesis_register_sidebar(
	[
		'id'          => 'before-footer-cta',
		'name'        => __( 'Before Footer CTA', 'local695' ),
		'description' => __( 'This is the before footer CTA section.', 'local695' ),
	]
);
