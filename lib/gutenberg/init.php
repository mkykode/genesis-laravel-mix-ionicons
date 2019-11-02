<?php
/**
 * Gutenberg theme support.
 *
 * @package Monochrome Pro
 * @author  StudioPress
 * @license GPL-2.0-or-later
 * @link    https://www.studiopress.com/
 */

add_action( 'wp_enqueue_scripts', 'local695_enqueue_gutenberg_frontend_styles' );
/**
 * Enqueues Gutenberg front-end styles.
 *
 * @since 2.7.0
 */
function local695_enqueue_gutenberg_frontend_styles() {

	wp_enqueue_style(
		genesis_get_theme_handle() . '-gutenberg',
		// get_stylesheet_directory_uri() . '/lib/gutenberg/front-end.css',
		get_stylesheet_directory_uri() . '/assets/front-end.css',
		[ genesis_get_theme_handle() ],
		genesis_get_theme_version()
	);

}

add_action( 'enqueue_block_editor_assets', 'local695_block_editor_styles' );
/**
 * Enqueues Gutenberg admin editor fonts and styles.
 *
 * @since 2.7.0
 */
function local695_block_editor_styles() {

	$block_editor_settings = genesis_get_config( 'block-editor-settings' );

	wp_enqueue_style(
		genesis_get_theme_handle() . '-gutenberg-fonts',
		$block_editor_settings['admin-fonts-url'],
		[],
		genesis_get_theme_version()
	);

}

// Adds support for editor styles.
add_theme_support( 'editor-styles' );

// Enqueues editor styles.
// add_editor_style( '/lib/gutenberg/style-editor.css' );
add_editor_style( 'assets/style-editor.css' );

// Adds support for block alignments.
add_theme_support( 'align-wide' );

// Makes media embeds responsive.
add_theme_support( 'responsive-embeds' );

$local695_block_editor_settings = genesis_get_config( 'block-editor-settings' );

// Adds support for editor font sizes.
add_theme_support(
	'editor-font-sizes',
	$local695_block_editor_settings['editor-font-sizes']
);

require_once get_stylesheet_directory() . '/lib/gutenberg/inline-styles.php';

add_theme_support(
	'editor-color-palette',
	$local695_block_editor_settings['editor-color-palette']
);

add_action( 'after_setup_theme', 'local695_content_width', 0 );
/**
 * Sets content width to match the “wide” Gutenberg block width.
 */
function local695_content_width() {

	$block_editor_settings = genesis_get_config( 'block-editor-settings' );

	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound -- See https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/924
	$GLOBALS['content_width'] = apply_filters( 'local695_content_width', $block_editor_settings['content-width'] );

}
