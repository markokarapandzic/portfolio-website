const { src, dest, series, watch } = require('gulp');
const browserSync = require("browser-sync").create();
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const image = require('gulp-image');
const inject = require('gulp-inject');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify-es').default;
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

function compileSass() {
  return src('./src/scss/**/*.scss')
    .pipe(sass().on("error", sass.logError))
    .pipe(dest('./src'))
    .pipe(browserSync.stream());
}

function watchSass() {
  browserSync.init({
    server: {
      baseDir: "./src",
    },
  });
  watch("./src/scss/**/*.scss").on("change", compileSass);
  watch("./src/*.html").on("change", browserSync.reload);
  watch("./src/js/**/*.js").on("change", browserSync.reload);
}

function preBuild() {
  return src('./dist/', { read: false })
    .pipe(clean());
}

function moveIndexHTML() {
  return src('./src/index.html')
    .pipe(inject(src(['./dist/**/*.css', './dist/**/*.js'], { read: false }), { addRootSlash: true, relative: true }))
    .pipe(dest('dist/'));
}

function minifyCSS() {
  return src('./src/**/*.css')
    .pipe(autoprefixer())
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

function moveAssets() {
  return src('./src/assets/*')
    .pipe(dest('dist/assets/'));
}

function moveManifest() {
  return src('./src/manifest.webmanifest')
    .pipe(dest('dist/'));
}

function moveServiceWorker() {
  return src('./src/service-worker.js')
    .pipe(uglify())
    .pipe(dest('dist/'));
}

function bundleJS() {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig, (error, stats) => {
      if (error) {
        return reject(error);
      }

      if (stats.hasErrors()) {
        return reject(new Error(stats.compilation.errors.join('\n')));
      }

      resolve();
    })
  });
}

exports.watch = watchSass;

exports.build = series(
  preBuild,
  minifyCSS,
  bundleJS,
  moveServiceWorker,
  compressImages,
  moveFaviconFolder,
  moveManifest,
  moveAssets,
  moveIndexHTML,
);
