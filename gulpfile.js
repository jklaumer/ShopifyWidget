var gulp = require('gulp'),
    livereload = require('gulp-livereload'),// auto-reload browser when files are changed 
    wiredep = require('wiredep').stream,
    gutil = require('gulp-util'),
    connect = require('gulp-connect'),      // run a local dev server
    inject = require('gulp-inject'),    // inject app dependency includes on index.html
    open = require('gulp-open'),      // open a URL in the browser
    concat = require('gulp-concat'),  
    rename = require('gulp-rename'),  
    uglify = require('gulp-uglify');
    htmlmin = require('gulp-htmlmin'); 

var jsSources = ['app/*.js'],
    cssSources = ['app/**/*.css'],
    htmlSources = ['**/*.html'];
    

// Watch
gulp.task('watch', function() {
    gulp.watch(jsSources, ['js']);
    gulp.watch(cssSources, ['css']);
    gulp.watch(htmlSources, ['html']);
});

var paths = ['./bower_components/','./app/*.js','./app/**/*.css'];
    jsDest = 'dist/scripts';

gulp.task('scripts', function() {  
    return gulp.src(jsSources)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest));
});

gulp.task('scripts', function() {  
    return gulp.src(jsSources)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('minify', function() {
  return gulp.src(htmlSources)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('injectables', function() {
    var sources = gulp.src(paths, {read: false});
    return gulp.src('index.html')
        .pipe(wiredep())
        .pipe(inject(sources))
        .pipe(gulp.dest('.'));
});

gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(connect.reload())
});

gulp.task('html', function() {
    gulp.src(htmlSources)
        .pipe(connect.reload())
});

gulp.task('css', function() {
    gulp.src(cssSources)
        .pipe(connect.reload())
});

gulp.task('connect', function() {
    connect.server({
        root: '.',
        livereload: true
    })
});

gulp.task('app', function(){
    var options = {
        uri: 'http://localhost:8080',
        app: 'Google Chrome'
    };
    gulp.src('./index.html')
        .pipe(open(options));
});


gulp.task('serve', ['connect', 'watch', 'injectables', 'app']);



