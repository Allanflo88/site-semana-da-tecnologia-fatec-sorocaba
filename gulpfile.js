
var gulp = require("gulp");
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', () => {
    return gulp.src('./*.+(scss|sass)')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./'))
    }
);

gulp.task('default', gulp.series('sass'));