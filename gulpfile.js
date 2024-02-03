const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Caminho base
const basePath = 'C:/Users/sabug/OneDrive/Área de Trabalho/FrontEnd M16 - images(2)/images';

// Nomes dos arquivos de imagens
const imageFiles = [
  'bird-ga5d9ed257_1920.jpg',
  'birds-g6b63afc7a_1920.jpg',
  'butterfly-g7f3546b64_1920.jpg',
  'hands-gc143a78ba_1920.png',
  'lilies-g19bcb21a4_1920.jpg',
  'street-gddeece843_1920.jpg',
];

// Compilação do SASS
gulp.task('sass', function () {
  return gulp.src(`${basePath}/**/*.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(basePath));
});

// Compressão de imagens
gulp.task('imagemin', function () {
  return gulp.src(imageFiles.map(file => `${basePath}/${file}`))
    .pipe(imagemin())
    .pipe(gulp.dest(basePath));
});

// Compressão de código JavaScript
gulp.task('uglify', function () {
  return gulp.src(`${basePath}/**/*.js`)
    .pipe(uglify())
    .pipe(gulp.dest(basePath));
});

// Tarefa padrão
gulp.task('default', gulp.parallel('sass', 'imagemin', 'uglify'));

// Observador de mudanças
gulp.task('watch', function () {
  gulp.watch(`${basePath}/**/*.scss`, gulp.series('sass'));
  gulp.watch(`${basePath}/**/*.js`, gulp.series('uglify'));
  gulp.watch(`${basePath}/**/*.{jpg,png,gif}`, gulp.series('imagemin'));
});
