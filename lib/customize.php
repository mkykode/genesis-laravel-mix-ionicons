<?php
/**
 * Monochrome Pro.
 *
 * This file adds the Customizer additions to the Monochrome Pro Theme.
 *
 * @package Monochrome
 * @author  StudioPress
 * @license GPL-2.0-or-later
 * @link    https://my.studiopress.com/themes/monochrome/
 */

add_action( 'customize_register', 'local695_customizer_register' );
/**
 * Registers settings and controls with the Customizer.
 *
 * @since 1.0.0
 *
 * @param WP_Customize_Manager $wp_customize Customizer object.
 */
function local695_customizer_register( $wp_customize ) {

	$wp_customize->add_section(
		'local695_theme_options',
		[
			'description' => __( 'Personalize the Monochrome Pro theme with these available options.', 'local695' ),
			'title'       => __( 'Monochrome Pro Settings', 'local695' ),
			'priority'    => 30,
		]
	);

	// Adds setting for link color.
	$wp_customize->add_setting(
		'local695_link_color',
		[
			'default'           => local695_customizer_get_default_link_color(),
			'sanitize_callback' => 'sanitize_hex_color',
		]
	);

	// Adds control for link color.
	$wp_customize->add_control(
		new WP_Customize_Color_Control(
			$wp_customize,
			'local695_link_color',
			[
				'description' => __( 'Change the default color for hovers for linked titles, menu links, entry meta links, and more.', 'local695' ),
				'label'       => __( 'Link Color', 'local695' ),
				'section'     => 'colors',
				'settings'    => 'local695_link_color',
			]
		)
	);

	// Adds setting for accent color.
	$wp_customize->add_setting(
		'local695_accent_color',
		[
			'default'           => local695_customizer_get_default_accent_color(),
			'sanitize_callback' => 'sanitize_hex_color',
		]
	);

	// Adds control for accent color.
	$wp_customize->add_control(
		new WP_Customize_Color_Control(
			$wp_customize,
			'local695_accent_color',
			[
				'description' => __( 'Change the color used for block-based buttons and the hover color for other buttons.', 'local695' ),
				'label'       => __( 'Accent Color', 'local695' ),
				'section'     => 'colors',
				'settings'    => 'local695_accent_color',
			]
		)
	);

	// Adds setting for footer start color.
	$wp_customize->add_setting(
		'local695_footer_start_color',
		[
			'default'           => local695_customizer_get_default_footer_start_color(),
			'sanitize_callback' => 'sanitize_hex_color',
		]
	);

	// Adds control for footer start color.
	$wp_customize->add_control(
		new WP_Customize_Color_Control(
			$wp_customize,
			'local695_footer_start_color',
			[
				'description' => __( 'Change the default color for start of footer gradient.', 'local695' ),
				'label'       => __( 'Footer Start Color', 'local695' ),
				'section'     => 'colors',
				'settings'    => 'local695_footer_start_color',
			]
		)
	);

	// Adds setting for footer end color.
	$wp_customize->add_setting(
		'local695_footer_end_color',
		[
			'default'           => local695_customizer_get_default_footer_end_color(),
			'sanitize_callback' => 'sanitize_hex_color',
		]
	);

	// Adds control for footer end color.
	$wp_customize->add_control(
		new WP_Customize_Color_Control(
			$wp_customize,
			'local695_footer_end_color',
			[
				'description' => __( 'Change the default color for end of footer gradient.', 'local695' ),
				'label'       => __( 'Footer End Color', 'local695' ),
				'section'     => 'colors',
				'settings'    => 'local695_footer_end_color',
			]
		)
	);

	// Adds control for search option.
	$wp_customize->add_setting(
		'local695_header_search',
		[
			'default'           => local695_customizer_get_default_search_setting(),
			'sanitize_callback' => 'absint',
		]
	);

	// Adds setting for search option.
	$wp_customize->add_control(
		'local695_header_search',
		[
			'label'       => __( 'Show Menu Search Icon?', 'local695' ),
			'description' => __( 'Check the box to show a search icon in the menu.', 'local695' ),
			'section'     => 'local695_theme_options',
			'type'        => 'checkbox',
			'settings'    => 'local695_header_search',
		]
	);

	// Adds control for the styled paragraph.
	$wp_customize->add_setting(
		'local695_intro_paragraph_styling',
		[
			'default'           => 1,
			'sanitize_callback' => 'absint',
		]
	);

	$wp_customize->add_control(
		'local695_intro_paragraph_styling',
		[
			'label'       => __( 'Enable the "intro" paragraph style on single posts?', 'local695' ),
			'description' => __( 'Check the box to automatically apply the "intro" font size and style to the first paragraph of all single posts.', 'local695' ),
			'section'     => 'local695_theme_options',
			'settings'    => 'local695_intro_paragraph_styling',
			'type'        => 'checkbox',
		]
	);

	// Adds control for the footer logo upload.
	$wp_customize->add_setting(
		'local695-footer-logo',
		[
			'default'           => local695_get_default_footer_logo(),
			'sanitize_callback' => 'esc_attr',
		]
	);

	$wp_customize->add_control(
		new WP_Customize_Image_Control(
			$wp_customize,
			'local695-footer-logo',
			[
				'description' => __( 'Select an image to display above the footer credits.', 'local695' ),
				'label'       => __( 'Footer Logo', 'local695' ),
				'section'     => 'title_tagline',
				'settings'    => 'local695-footer-logo',
			]
		)
	);

}
