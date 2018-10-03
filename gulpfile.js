var gulp        = require("gulp");
    sass        = require("gulp-sass"),
    sourcemaps  = require("gulp-sourcemaps"),
    browserSync = require("browser-sync").create(),
    cleanCSS    = require("gulp-clean-css"),
    terser      = require("gulp-terser"),
    reload      = browserSync.reload;
gulp.task("minify-css", () => {
    return gulp.src("./style.css")
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./build"));
});
gulp.task("js", ()=>{
    return gulp.src("./script.js")
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./build"));
})
gulp.task("html", ()=>{
    return gulp.src("./index.html")
        .pipe(gulp.dest("./build"));
})

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

gulp.task("svg", () => {
    return gulp.src(["./images/*.*"])
        .pipe(gulp.dest("./build/images"));
})
gulp.task("sponsors", () => {
    return gulp.src(["./images/sponsors/*.png", "./images/sponsors/**.jpg"])
        .pipe(gulp.dest("./build/images/sponsors"));
})
gulp.task("previous", () => {
    return gulp.src(["./images/previous/*.jpeg"])
        .pipe(gulp.dest("./build/images/previous"));
})
gulp.task("organizers", () => {
    return gulp.src(["./images/organizers/**.jpeg"])
        .pipe(gulp.dest("./build/images/organizers"));
})
gulp.task("icons", () => {
    return gulp.src(["./images/favicons/*.ico"])
        .pipe(gulp.dest("./build/images/favicons"));
})

gulp.task("build",gulp.series("html","sass", "minify-css", "js","svg", "sponsors","previous", "organizers", "icons"));

gulp.task("default", gulp.series("sass", "serve"));
