'use strict';

export default {

  browserPort: 3000,
  UIPort: 3001,

  sourceDir: './src/',
  buildDir: './build/',

  styles: {
    src: 'assets/styles/**/*.scss',
    dest: 'build/css',
    prodSourcemap: false,
    sassIncludePaths: []
  },

  scripts: {
    src: 'src/app/**/*.js',
    dest: 'build/js'
  },

  images: {
    src: 'assets/images/**/*',
    dest: 'build/images'
  },

  fonts: {
    src: ['assets/fonts/**/*'],
    dest: 'build/fonts'
  },

  assetExtensions: [
    'js',
    'css',
    'png',
    'jpe?g',
    'gif',
    'svg',
    'eot',
    'otf',
    'ttc',
    'ttf',
    'woff2?'
  ],

  views: {
    index: 'public/index.html',
    src: 'public/**/*.html',
    dest: 'app/js'
  },

  gzip: {
    src: 'build/**/*.{html,xml,json,css,js,js.map,css.map}',
    dest: 'build/',
    options: {}
  },

  test: {
    karma: 'test/karma.conf.js',
    protractor: 'test/protractor.conf.js'
  },

  init: function() {
    this.views.watch = [
      this.views.index,
      this.views.src
    ];

    return this;
  }

}.init();
