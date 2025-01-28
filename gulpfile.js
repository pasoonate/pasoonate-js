const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const replace = require('gulp-replace');
 
const regex = /^(import|export).*;{1}$/gm;
const strictModeRegex = /^'use strict';/gm;

function jsBuild(){
  return src([
    './src/mixin/*.js',
    './src/calendar/*.js',
    './src/formatter/*.js',
    './src/parser/*.js',
    './src/lang/*.js',
    './src/*.js' 
  ], {base:'./'})
    .pipe(concat('pasoonate.js'))
    .pipe(replace(regex, ''))
    .pipe(replace(strictModeRegex, ''))
    .pipe(dest('browser'))
}

function jsMinify(){
  return src([
    './src/mixin/*.js',
    './src/calendar/*.js',
    './src/formatter/*.js',
    './src/parser/*.js',
    './src/lang/*.js',
    './src/*.js'
  ], {base:'./'})
    .pipe(concat('pasoonate.min.js'))
    .pipe(replace(regex, ''))
    .pipe(replace(strictModeRegex, ''))
    .pipe(uglify())
    .pipe(dest('browser'));
}

function watching() {
  watch('./src', null, series(jsBuild));
}

exports.minify = jsMinify;
exports.build = jsBuild;
exports.default = series(jsMinify);
exports.watch = watching;
