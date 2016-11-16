// Requires
//////////////////////////////
var gulp         = require('gulp'),
    stylus       = require('gulp-stylus'),
    autoprefixer = require('autoprefixer-stylus'),
    kit          = require('gulp-kit'),
    plumber      = require('gulp-plumber'),
    notify       = require('gulp-notify'),
    browserSync  = require('browser-sync'),
    reload       = browserSync.reload;



// Scripts
//////////////////////////////
gulp.task('scripts', function () {
gulp.src('app/*.js')  // TODO: make this just app.js and compile
    .pipe(reload({stream:true}));
});

// Styles
//////////////////////////////
gulp.task('styles', function () {
gulp.src('assets/styl/*.styl')
    .pipe(plumber({errorHandler: notify.onError({
          title: 'Stylus Error',
          message: '<%= error.message %>'})}))
    .pipe(stylus({ use: [autoprefixer('> 5% in US')] }))
    .pipe(gulp.dest('assets/css'))
    .pipe(reload({stream:true}));
});

// Kit
//////////////////////////////
gulp.task('kit', function () {
gulp.src('assets/kit/*.kit')
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
  gulp.watch('app/**/*.js', ['scripts']);
  gulp.watch('assets/styl/**/*.styl', ['styles']);
  gulp.watch('assets/kit/**/*.kit', ['kit']);
});

// Default
//////////////////////////////
gulp.task('default', ['scripts', 'styles', 'kit', 'browser-sync', 'watch']);
