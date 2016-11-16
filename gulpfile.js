// Requires
//////////////////////////////
var gulp         = require('gulp'),
    stylus       = require('gulp-stylus'),
    autoprefixer = require('autoprefixer-stylus'),
    concat       = require('gulp-concat'),
    kit          = require('gulp-kit'),
    plumber      = require('gulp-plumber'),
    notify       = require('gulp-notify'),
    browserSync  = require('browser-sync'),
    reload       = browserSync.reload;



// Styles
//////////////////////////////
gulp.task('styles', function () {
gulp.src('assets/styl/main.styl')
    .pipe(plumber({errorHandler: notify.onError({
          title: 'Stylus Error',
          message: '<%= error.message %>'})}))
    .pipe(stylus({ use: [autoprefixer('> 5% in US')] }))
    .pipe(gulp.dest('assets/css'))
    .pipe(reload({stream:true}));
});

// Scripts
//////////////////////////////
gulp.task('scripts', function () {
gulp.src(['app/app.js', 'app/**/!(app).js'])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('assets/js'))
    .pipe(reload({stream:true}));
});

// Kit
//////////////////////////////
gulp.task('kit', function () {
gulp.src('app/root-view/index.kit')
    .pipe(plumber({errorHandler: notify.onError({
          title: 'Kit Error',
          message: '<%= error.message %>'})}))
    .pipe(kit())
    .pipe(gulp.dest(''))
    .pipe(reload({stream:true}));
});



// Browser Sync
//////////////////////////////
gulp.task('browser-sync', function () {
  browserSync({
    server:{ baseDir: './' }
  })
});

// Watch
//////////////////////////////
gulp.task('watch', function () {
  gulp.watch(['app/**/*.styl', 'assets/styl/**/*.styl'], ['styles']);
  gulp.watch('app/**/*.js', ['scripts']);
  gulp.watch('app/**/*.kit', ['kit']);
});

// Default
//////////////////////////////
gulp.task('default', ['styles', 'scripts', 'kit', 'browser-sync', 'watch']);
