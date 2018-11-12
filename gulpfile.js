const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
 
const regex = /^(import|export).*;{1}$/gm;

gulp.task('js-build', function(){
  return gulp.src([
    './src/mixin/*.js',
    './src/calendar/*.js',
    './src/formatter/*.js',
    './src/*.js', 
    './src/lang/*.js'
  ], {base:'./'})
    .pipe(concat('pasoonate.js'))
    .pipe(replace(regex, ''))
    .pipe(gulp.dest('dist'))
});

gulp.task('js-minify', function(){
  return gulp.src([
    './src/mixin/*.js',
    './src/calendar/*.js',
    './src/formatter/*.js',
    './src/*.js', 
    './src/lang/*.js'
  ], {base:'./'})
    .pipe(concat('pasoonate.js'))
    .pipe(replace(regex, ''))
    .pipe(minify())
    .pipe(gulp.dest('dist'))
    .pipe(rename('pasoonate.min.js'))
});

gulp.task('default', ['js-minify']);

gulp.task('minify', ['js-minify']);

gulp.task('build', ['js-build']);
 
gulp.task('watch', function () {
  gulp.watch('./src', ['js-build']);
});