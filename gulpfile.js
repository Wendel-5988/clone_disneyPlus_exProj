const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

//compilação do sass
function styles() {
    return gulp.src('./src/styles/*.scss') //ele vai buscar tds os arquivos .scss dentro da pasta styles.
        .pipe(sass({ outputStyle: 'compressed' })) //aqui ele fala que todo arquivo sair da funçao sass, deve ser comprimido.
        .pipe(gulp.dest('./dist/css')); //aqui ele diz onde será o destino da pasta comprimida
}

function images() {
    return gulp.src('./src/images/**/*') 
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images')); 
}

exports.default = gulp.parallel(styles, images, scripts);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)) //funcao criada para observar mudancas feitas nos arquivos scss assim executando a compilaçao do sass paralelamente.
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts)) 
}