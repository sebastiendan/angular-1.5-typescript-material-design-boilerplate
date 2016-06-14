var gulp = require('gulp'),
    sass = require('gulp-sass'),
    html = require('gulp-htmlmin'),
    insert = require('gulp-insert'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    sourcemaps = require('gulp-sourcemaps'),
    folders = require('gulp-folders'),
    replace = require('gulp-replace');

    var paths = {
        scss: 'src/common/scss',
        css: 'src/common/css'
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

gulp.task('typescript-dev', folders('src', function (folder) {
    var tsProject = tsc.createProject('tsconfig.json');

	return gulp.src('src/' + folder + '/ts/**/*.ts')
		.pipe(tslint())
        .pipe(tslint.report('prose'))
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject)).js
        .pipe(sourcemaps.write('.'))
        .pipe(replace('common/ts', 'common/js'))
        .pipe(replace(/(\.\.\/)+common\/js\/urls/g, 'urls'))
        .pipe(gulp.dest('src/' + folder + '/js'));
}));

gulp.task('html-dev', folders('src', function (folder) {
	return gulp.src('src/' + folder + '/templates/**/*.html')
		.pipe(insert.transform(function(content, file){
		    var fileName = file.path.substr(file.path.lastIndexOf('/') + 1);
		    return '<script type=text/ng-template id=' + fileName + '>' + content + '</script>';
		}))
		.pipe(html({collapseWhitespace: true}))
		.pipe(concat('templates.html'))
        .pipe(gulp.dest('src/' + folder));
}));

gulp.task('watch', function () {
  gulp.watch(paths.scss + '/**/*.scss', ['styles-dev']);
  gulp.watch('src/**/*.ts', ['typescript-dev']);
  gulp.watch('src/**/*.html', ['html-dev']);
});

gulp.task('default', ['html-dev', 'typescript-dev', 'styles-dev', 'watch']);