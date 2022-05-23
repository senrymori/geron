const fileinclude = require('gulp-file-include');
const gulp = require('gulp');

const paths = {
  scripts: {
    src: './base/components/',
    dest: './build'
  }
};
 
async function includeHTML(){
  return gulp.src([
    '*.html',
    '!header.html', // ignore
    '!footer.html' // ignore
    ])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(paths.scripts.dest));
}

exports.default = includeHTML





async function includeHTML(){
  return gulp.src([
    '*.html',
    '!header.html', // ignore
    '!footer.html' // ignore
    ])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(paths.scripts.dest));
}

exports.default = includeHTML;

