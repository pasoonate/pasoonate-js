const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
 
const regex = /^(import|export).*;{1}$/gm;

function jsBuild(){
  return src([
    './src/mixin/*.js',
    './src/calendar/*.js',
    './src/formatter/*.js',
    './src/*.js', 
    './src/lang/*.js'
  ], {base:'./'})
    .pipe(concat('pasoonate.js'))
    .pipe(replace(regex, ''))
    .pipe(dest('dist'))
}

function jsMinify(){
  return src([
    './src/mixin/*.js',
    './src/calendar/*.js',
    './src/formatter/*.js',
    './src/*.js', 
    './src/lang/*.js'
  ], {base:'./'})
    .pipe(concat('pasoonate.js'))
    .pipe(replace(regex, ''))
    .pipe(minify())
    .pipe(dest('dist'))
    .pipe(rename('pasoonate.min.js'))
}

function watching() {
  watch('./src', null, series(jsMinify));
}

exports.minify = jsMinify;
exports.build = jsBuild;
exports.default = series(jsMinify);
exports.watch = watching;