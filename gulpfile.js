var gulp = require('gulp'),
    sass = require('gulp-sass'),
    html = require('gulp-htmlmin'),
    insert = require('gulp-insert'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    sourcemaps = require('gulp-sourcemaps'),
    replace = require('gulp-replace');

    var paths = {
        ts: 'app/ts',
        js: 'app/js',
        scss: 'app/scss',
        css: 'app/css',
        templates: 'app/templates'
    };

gulp.task('styles-dev', function () {
  return gulp.src(paths.scss + '/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 3 version', 'ie 9']
    }))
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write('./sourcemaps'))
    .pipe(gulp.dest(paths.css));
});

gulp.task('typescript-dev', function () {
    var tsProject = tsc.createProject('tsconfig.json');

	return gulp.src(paths.ts + '/**/*.ts')
		.pipe(tslint())
        .pipe(tslint.report('prose'))
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject)).js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.js));
});

gulp.task('html-dev', function () {
	return gulp.src(paths.templates + '/**/*.html')
		.pipe(insert.transform(function(content, file){
		    var fileName = file.path.substr(file.path.lastIndexOf('/') + 1);
		    return '<script type=text/ng-template id=' + fileName + '>' + content + '</script>';
		}))
		.pipe(html({collapseWhitespace: true}))
		.pipe(concat('templates.html'))
        .pipe(gulp.dest('app'));
});

gulp.task('watch', function () {
  gulp.watch(paths.scss + '/**/*.scss', ['styles-dev']);
  gulp.watch(paths.ts + '/**/*.ts', ['typescript-dev']);
  gulp.watch(paths.templates + '/**/*.html', ['html-dev']);
});

gulp.task('default', ['html-dev', 'typescript-dev', 'styles-dev', 'watch']);