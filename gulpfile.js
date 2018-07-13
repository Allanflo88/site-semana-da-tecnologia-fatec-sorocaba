
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

gulp.task('html',()=>{
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('javascript',()=>{
    return gulp.src('./script.js')
        .pipe(gulp.dest('./dist'));
});


gulp.task('default', gulp.series('html','sass','javascript'));