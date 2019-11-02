const mix = require('laravel-mix');
const srcPath = './src';
const assetPath = './assets/';
const sassConfig = {
  sassOptions: {
    outputStyle: process.env === 'development' ? 'nested' : 'compressed',
    sourceMaps: true,
  },
  implementation: require('node-sass'), // Switch from Dart to node-sass implementation
};
const sassOptios = {
  postCss: [require('autoprefixer')()],
  processCssUrls: false,
};

mix
  .autoload({
    jquery: ['$', 'window.jQuery'],
  })
  .js(`${srcPath}/js/global.js`, assetPath)
  .js(`${srcPath}/js/block-effects.js`, assetPath)
  .js(`${srcPath}/js/responsive-menus.js`, assetPath)
  .sass(`${srcPath}/scss/main.scss`, assetPath)
  .options(sassOptios)
  .sass(`${srcPath}/scss/front-end.scss`, assetPath, sassConfig)
  .options(sassOptios)
  .sass(`${srcPath}/scss/style-editor.scss`, assetPath, sassConfig)
  .options(sassOptios)
  .copy(`${srcPath}/fonts`, assetPath, sassConfig)
  .browserSync({
    proxy: 'https://wp-local695.lndo.site',
  });

mix.sourceMaps(false, 'inline-source-map');
