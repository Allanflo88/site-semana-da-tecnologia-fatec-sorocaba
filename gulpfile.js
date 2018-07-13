
var gulp = require("gulp");
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', () => {
    return gulp.src('./style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'))
    }
);


gulp.task('default', gulp.series('sass'));