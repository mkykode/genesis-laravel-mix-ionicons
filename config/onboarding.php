<?php
/**
 * Monochrome Pro.
 *
 * Onboarding config to load plugins and homepage content on theme activation.
 *
 * Visit `/wp-admin/admin.php?page=genesis-getting-started` to trigger import.
 *
 * @package Monochrome Pro
 * @author  StudioPress
 * @license GPL-2.0-or-later
 * @link    https://my.studiopress.com/themes/monochrome/
 */

$local695_shared_content = genesis_get_config( 'onboarding-shared' );

$local695_starter_packs_content = [
	'starter_packs' => [
		'minimal'     => [
			'title'       => __( 'Minimal', 'local695' ),
			'description' => __( 'A pack with a homepage designed for minimalists.', 'local695' ),
			'thumbnail'   => get_stylesheet_directory_uri() . '/config/import/images/thumbnails/minimal.jpg',
			'demo_url'    => 'https://demo.studiopress.com/monochrome/',
			'config'      => [
				'dependencies'     => [
					'plugins' => $local695_shared_content['dependencies']['plugins'],
				],
				'content'          => array_merge(
					[
						'homepage' => [
							'post_title'     => 'Homepage',
							'post_content'   => require dirname( __FILE__ ) . '/import/content/minimal.php',
							'post_type'      => 'page',
							'post_status'    => 'publish',
							'comment_status' => 'closed',
							'ping_status'    => 'closed',
							'meta_input'     => [
								'_genesis_layout'     => 'full-width-content',
								'_genesis_hide_title' => true,
								'_genesis_hide_breadcrumbs' => true,
								'_genesis_hide_singular_image' => true,
							],
						],
					],
					$local695_shared_content['content'],
					$local695_shared_content['starter_pack']['minimal']
				),
				'navigation_menus' => $local695_shared_content['navigation_menus'],
				'widgets'          => $local695_shared_content['widgets'],
			],
		],
		'fashion'     => [
			'title'       => __( 'Fashion', 'local695' ),
			'description' => __( 'A pack with a homepage designed for fashion agencies.', 'local695' ),
			'thumbnail'   => get_stylesheet_directory_uri() . '/config/import/images/thumbnails/fashion.jpg',
			'demo_url'    => 'https://demo.studiopress.com/monochrome/fashion/',
			'config'      => [
				'dependencies'     => [
					'plugins' => $local695_shared_content['dependencies']['plugins'],
				],
				'content'          => array_merge(
					[
						'homepage' => [
							'post_title'     => 'Homepage',
							'post_content'   => require dirname( __FILE__ ) . '/import/content/fashion.php',
							'post_type'      => 'page',
							'post_status'    => 'publish',
							'comment_status' => 'closed',
							'ping_status'    => 'closed',
							'meta_input'     => [
								'_genesis_layout'     => 'full-width-content',
								'_genesis_hide_title' => true,
								'_genesis_hide_breadcrumbs' => true,
								'_genesis_hide_singular_image' => true,
							],
						],
					],
					$local695_shared_content['content'],
					$local695_shared_content['starter_pack']['fashion']
				),
				'navigation_menus' => $local695_shared_content['navigation_menus'],
				'widgets'          => $local695_shared_content['widgets'],
			],
		],
		'law-firm'    => [
			'title'       => __( 'Law Firm', 'local695' ),
			'description' => __( 'A pack with a homepage designed for Law Firms.', 'local695' ),
			'thumbnail'   => get_stylesheet_directory_uri() . '/config/import/images/thumbnails/law-firm.jpg',
			'demo_url'    => 'https://demo.studiopress.com/monochrome/legal/',
			'config'      => [
				'dependencies'     => [
					'plugins' => $local695_shared_content['dependencies']['plugins'],
				],
				'content'          => array_merge(
					[
						'homepage' => [
							'post_title'     => 'Homepage',
							'post_content'   => require dirname( __FILE__ ) . '/import/content/law-firm.php',
							'post_type'      => 'page',
							'post_status'    => 'publish',
							'comment_status' => 'closed',
							'ping_status'    => 'closed',
							'meta_input'     => [
								'_genesis_layout'     => 'full-width-content',
								'_genesis_hide_title' => true,
								'_genesis_hide_breadcrumbs' => true,
								'_genesis_hide_singular_image' => true,
							],
						],
					],
					$local695_shared_content['content'],
					$local695_shared_content['starter_pack']['law-firm']
				),
				'navigation_menus' => $local695_shared_content['navigation_menus'],
				'widgets'          => $local695_shared_content['widgets'],
			],
		],
		'marketing'   => [
			'title'       => __( 'Marketing', 'local695' ),
			'description' => __( 'A pack with a homepage designed for Marketing agencies.', 'local695' ),
			'thumbnail'   => get_stylesheet_directory_uri() . '/config/import/images/thumbnails/marketing.jpg',
			'demo_url'    => 'https://demo.studiopress.com/monochrome/marketing/',
			'config'      => [
				'dependencies'     => [
					'plugins' => $local695_shared_content['dependencies']['plugins'],
				],
				'content'          => array_merge(
					[
						'homepage' => [
							'post_title'     => 'Homepage',
							'post_content'   => require dirname( __FILE__ ) . '/import/content/marketing.php',
							'post_type'      => 'page',
							'post_status'    => 'publish',
							'comment_status' => 'closed',
							'ping_status'    => 'closed',
							'meta_input'     => [
								'_genesis_layout'     => 'full-width-content',
								'_genesis_hide_title' => true,
								'_genesis_hide_breadcrumbs' => true,
								'_genesis_hide_singular_image' => true,
							],
						],
					],
					$local695_shared_content['content'],
					$local695_shared_content['starter_pack']['marketing']
				),
				'navigation_menus' => $local695_shared_content['navigation_menus'],
				'widgets'          => $local695_shared_content['widgets'],
			],
		],
		'photography' => [
			'title'       => __( 'Photographer', 'local695' ),
			'description' => __( 'A pack with a homepage designed for Photographers.', 'local695' ),
			'thumbnail'   => get_stylesheet_directory_uri() . '/config/import/images/thumbnails/photography.jpg',
			'demo_url'    => 'https://demo.studiopress.com/monochrome/photography/',
			'config'      => [
				'dependencies'     => [
					'plugins' => $local695_shared_content['dependencies']['plugins'],
				],
				'content'          => array_merge(
					[
						'homepage' => [
							'post_title'     => 'Homepage',
							'post_content'   => require dirname( __FILE__ ) . '/import/content/photography.php',
							'post_type'      => 'page',
							'post_status'    => 'publish',
							'comment_status' => 'closed',
							'ping_status'    => 'closed',
							'meta_input'     => [
								'_genesis_layout'     => 'full-width-content',
								'_genesis_hide_title' => true,
								'_genesis_hide_breadcrumbs' => true,
								'_genesis_hide_singular_image' => true,
							],
						],
					],
					$local695_shared_content['content'],
					$local695_shared_content['starter_pack']['photography']
				),
				'navigation_menus' => $local695_shared_content['navigation_menus'],
				'widgets'          => $local695_shared_content['widgets'],
			],
		],
	],
];

return $local695_starter_packs_content;
