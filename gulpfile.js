var gulp        = require("gulp");
    sass        = require("gulp-sass"),
    sourcemaps  = require("gulp-sourcemaps"),
    browserSync = require("browser-sync").create(),
    reload      = browserSync.reload;
gulp.task("sass", () => {
  return gulp
    .src("./style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./"));
});
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", reload);
    gulp.watch("*.scss", gulp.series("sass")).on("change", reload);
    gulp.watch("*.js").on("change", reload);

});

gulp.task("default", gulp.series("sass", "serve"));
