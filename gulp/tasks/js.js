import webpack from "webpack-stream";

export const js = () => {

	return app.gulp.src(app.path.src.js, {sourcemaps: true})
	.pipe(webpack({
		mode: "production",
		output: {
			filename: "script.js"
		},
		optimization: {
			minimize: false,
		},
	}))
	.pipe(app.gulp.dest(app.path.build.js))
	.pipe(webpack({
		mode: "production",
		output: {
			filename: "script.min.js"
		},
		optimization: {
			minimize: true,
		},
	}))
	.pipe(app.gulp.dest(app.path.build.js))
	.pipe(app.gulp.dest(app.path.docs.js))
	.pipe(app.plugins.browsersync.stream())
}