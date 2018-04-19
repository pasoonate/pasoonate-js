var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var minify = require('gulp-minify');
 
gulp.task('default', function(){
  return gulp.src(['./src/mixin/*.js','./src/*.js', './src/lang/*.js'], {base:'./'})
    .pipe(sourcemaps.init())
    .pipe(concat('pasoonate.js'))
    .pipe(sourcemaps.write())
    .pipe(minify())
    .pipe(gulp.dest('dist'))
});