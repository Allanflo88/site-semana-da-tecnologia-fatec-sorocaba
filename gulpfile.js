
var gulp = require("gulp");
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task('sass', () => {
    return gulp.src('./*.+(scss|sass)')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
    }
);

gulp.task('browserSync', gulp.series(['sass']), () => {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 8080,
        startPath: "index.html"
    });

    gulp.watch('style.scss', ['sass']);
});

gulp.task('watch', gulp.series('browserSync'));