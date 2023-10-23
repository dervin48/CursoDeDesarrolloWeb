const {src, dest, watch} = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const plumber = require('gulp-plumber');

function css (done){
    //Identificar el archivo sass

    //Copilarlo

    //Guardarla en el disco duro

    src('src/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(dest("build/css"))


    done();
}

function imagenes(){


}
function dev(done){
    watch("src/scss/**/*.scss", css)

    done();
}


exports.css =css;
exports.dev = dev;