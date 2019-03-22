var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinyPNG = require('gulp-tinypng-compress');
var uglify = require('gulp-uglify');
// var rename = require("gulp-rename");
// var htmlreplace = require('gulp-html-replace');
// если понадобиться - на будущее

// переносим и сжимаем CSS
gulp.task('minify-css', function () {
  return gulp.src('./src/css/*.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist/css/'));
});
// переносим и сжимаем HTML
gulp.task('htmlmin', function () {
  return gulp.src('./src/*.html')
    .pipe(htmlmin({
      // убираем все пробелы
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'));
});
// переносим и сжимаем img через сервис TinyPNG
gulp.task('tinypng', function () {
  return gulp.src('./src/img/**/*.{png,jpg,jpeg}')
    .pipe(tinyPNG({
      key: 'jKt5GB1c58BFfdX8QD1KfDwjg8LNSTDZ'
    }))
    .pipe(gulp.dest('dist/img/'));
});

// простой перенос JS файлов
// gulp.task('move-js', function (done) {
//   return gulp.src('./src/js/*.js')
//     .pipe(gulp.dest('dist/js/'))
//   done();
// });
// два метода для того, чтоб после переименовывать минимизированные файлы
// переносим все файлы JS, имеющие формат min.js
gulp.task('move-js', function () {
  return gulp.src('./src/js/*.min.js')
    .pipe(gulp.dest('dist/js/'));
});

// переносим и сжимаем все JS файлы, не имеющие формата min.js
gulp.task('guglify', function () {
  return gulp.src(['./src/js/*.js', '!./src/js/*.min.js'])
    .pipe(uglify())
    // .pipe(rename({suffix: '.min'})) добавляет суффикс .min при минификации.
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('fonts', function () {
  // ./src/fonts/**/* означает 'берем из всех папок се файлы'
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('default', gulp.parallel('minify-css', 'htmlmin', 'tinypng', 'move-js', 'guglify','fonts', function (done) {
  done();
}));