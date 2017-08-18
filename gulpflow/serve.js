import gulp from 'gulp'
import browserSync from 'browser-sync'

// Get a unique reference
browserSync.create()

// Start the server
// https://browsersync.io/docs/options
gulp.task('serve', ['dev'], () => {
  browserSync.init({

    // localhost:8080
    port: '8080',

    // Delightful launch
    browser: ['google chrome'],

    // Serve this!
    server: './dist'
  })

  // Watch files
  gulp.watch('./src/scss/**/*.scss', ['sass'])
  gulp.watch('./src/js/*.js', ['js']).on('change', browserSync.reload)
  gulp.watch('./dist/*.html').on('change', browserSync.reload)
  gulp.watch('./src/*.html', ['html'])
})