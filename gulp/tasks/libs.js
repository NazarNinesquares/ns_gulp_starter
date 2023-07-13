export const libs = () => {
	
	return app.gulp.src(app.path.src.libs)
	.pipe(app.gulp.dest(app.path.build.libs))
	.pipe(app.gulp.dest(app.path.docs.libs))
}