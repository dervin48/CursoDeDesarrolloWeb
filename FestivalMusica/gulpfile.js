const { src, dest, watch, parallel, series } = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const plumber = require('gulp-plumber');

function css() {
    return src('src/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(dest("build/css"));
}

function imagenes() {
    // Agrega la lógica para procesar imágenes aquí
}

function dev() {
    watch("src/scss/**/*.scss", css);
    watch("src/js/**/*.js", javascript);
}

function javascript() {
    return src('src/js/**/*.js')
        .pipe(dest('build/js'));
}

exports.css = css;
exports.js = javascript;
exports.dev = series(css, parallel(dev, javascript));

exports.default = dev; // Establece dev como la tarea por defecto
