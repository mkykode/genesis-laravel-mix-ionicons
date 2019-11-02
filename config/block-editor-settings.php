<?php
/**
 * Block Editor settings specific to Monochrome Pro.
 *
 * @package Monochrome
 * @author  StudioPress
 * @license GPL-2.0-or-later
 * @link    https://my.studiopress.com/themes/monochrome/
 */

$local695_link_color              = get_theme_mod( 'local695_link_color', local695_customizer_get_default_link_color() );
$local695_accent_color            = get_theme_mod( 'local695_accent_color', local695_customizer_get_default_accent_color() );
$local695_accent_color_contrast   = local695_color_contrast( $local695_accent_color );
$local695_accent_color_brightness = local695_color_brightness( $local695_accent_color, 35 );

return [
	'admin-fonts-url'              => 'https://fonts.googleapis.com/css?family=Muli:300,300i,400,400i,600,600i|Open+Sans+Condensed:300',
	'content-width'                => 1200,
	'default-button-bg'            => $local695_accent_color,
	'default-button-color'         => $local695_accent_color_contrast,
	'default-button-outline-hover' => $local695_accent_color_brightness,
	'default-link-color'           => $local695_link_color,
	'default-accent-color'         => $local695_accent_color,
	'editor-color-palette'         => [
		[
			'name'  => __( 'Custom color', 'local695' ),
			'slug'  => 'theme-primary',
			'color' => $local695_link_color,
		],
		[
			'name'  => __( 'Accent color', 'local695' ),
			'slug'  => 'theme-secondary',
			'color' => $local695_accent_color,
		],
	],
	'editor-font-sizes'            => [
		[
			'name' => __( 'Small', 'local695' ),
			'size' => 14,
			'slug' => 'small',
		],
		[
			'name' => __( 'Normal', 'local695' ),
			'size' => 18,
			'slug' => 'normal',
		],
		[
			'name' => __( 'Large', 'local695' ),
			'size' => 22,
			'slug' => 'large',
		],
		[
			'name' => __( 'Larger', 'local695' ),
			'size' => 26,
			'slug' => 'larger',
		],
	],
];
