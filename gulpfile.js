const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

//compilação do sass
function styles() {
    return gulp.src('./src/styles/*.scss') //ele vai buscar tds os arquivos .scss dentro da pasta styles.
        .pipe(sass({ outputStyle: 'compressed' })) //aqui ele fala que todo arquivo sair da funçao sass, deve ser comprimido.
        .pipe(gulp.dest('./dist/css')); //aqui ele diz onde será o destino da pasta comprimida
}

exports.default = styles;
exports.watch =function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)) //funcao criada para observar mudancas feitas nos arquivos scss assim executando a compilaçao do sass paralelamente.
}