import imagemin from "gulp-imagemin";

export const images = () => {

	return app.gulp.src(app.path.src.images)
	.pipe(app.plugins.newer(app.path.build.images))
	.pipe(imagemin({
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		interlaced: true,
		optimizationLevel: 5 // 0 to 7
	}))
	.pipe(app.gulp.dest(app.path.build.images))
	.pipe(app.gulp.src(app.path.src.svg))
	.pipe(app.gulp.dest(app.path.build.images))
	.pipe(app.gulp.dest(app.path.docs.images))
	.pipe(app.plugins.browsersync.stream())
}