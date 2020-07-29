const { src, dest, series } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const image = require('gulp-image');

function moveIndexHTML() {
  return src('./src/index.html')
    .pipe(dest('dist/'));
}

function prefixCSS() {
  return src('./src/styles.css')
    .pipe(autoprefixer())
    .pipe(dest('dist/'));
}

function minifyCSS() {
  return src('./src/styles.css')
    .pipe(cleanCSS())
    .pipe(dest('dist/'));
}

function compressImages() {
  return src(['./src/images/*', '!./src/images/favicon.ico'])
    .pipe(image())
    .pipe(dest('dist/images/'));
}

function moveFaviconFolder() {
  return src('./src/images/favicon.ico/*')
    .pipe(dest('dist/images/favicon.ico/'));
}

exports.default = series(moveIndexHTML, prefixCSS, minifyCSS, compressImages, moveFaviconFolder);
