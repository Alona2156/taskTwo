const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const nodemon = require('gulp-nodemon');

gulp.task('gulp_nodemon', function(){
  nodemon({
    script: "./bin/www",
    ext: "js html css hbs",
    env: {'NODE_ENV': 'development'}
  });
});

gulp.task('sass', function(){
  return gulp.src('./public/stylesheets/style.scss')
  .pipe(sassGlob())
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest("./public/stylesheets"));
})

gulp.task('sass:watch', function(){
  gulp.watch('./public/stylesheets/**/*', ['sass']);
});

gulp.task('default', ['sass:watch', 'gulp_nodemon']);
