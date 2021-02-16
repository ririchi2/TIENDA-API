'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');


gulp.task('sass', function(){
    return gulp.src("./css/*.scss")
      .pipe(sass().on('error', sass.logError)) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.stream());
});

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
});

gulp.task('serve', gulp.series(['sass'], function(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
    gulp.watch('./css/styles.scss', gulp.series(['sass']));
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./js/*.js").on('change', browserSync.reload);
}));