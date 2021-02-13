'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('sass', function(){
    return gulp.src("./css/styles.scss")
      .pipe(sass().on('error', sass.logError)) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('./css'));
});

gulp.task('browserSync', function(){
    browserSync.init({
        server: "./"
    })
});


// Static Server + watching scss/html/js files
gulp.task('serve', gulp.series(['sass']), function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./css/*.scss', gulp.series(['sass']));
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./js/*.js").on('change', browserSync.reload);

});