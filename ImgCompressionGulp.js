//https://github.com/imagemin/imagemin-jpeg-recompress

//Helps reduce image weight 

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
var imageminPngQuant  = require ('imagemin-pngquant');

gulp.task('optimize', function () {
  return gulp.src('src/images/*')
    .pipe(imagemin([
      imagemin.gifsicle(),
      imageminJpegRecompress({
        loops:6,
        min: 40,
        max: 85,
        quality:'low'
      }),
    imageminPngQuant(),
      imagemin.svgo()
    ]))

    .pipe(gulp.dest('dist/images'));

});