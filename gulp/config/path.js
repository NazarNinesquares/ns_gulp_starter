import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const srcFolder = `./_src`;
const buildFolder = `./_dist`;
const docsFolder = `./docs`;

export const path = {
	src: {
		fonts: `${srcFolder}/fonts/**/*.*`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		js: `${srcFolder}/js/script.js`,
		scss: `${srcFolder}/scss/style.scss`,
		html: `${srcFolder}/*.html`,
		libs: `${srcFolder}/libs/**/*.*`,
	},
	build: {
		fonts: `${buildFolder}/fonts/`,
		images: `${buildFolder}/img/`,
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		libs: `${buildFolder}/libs/`,
	},
	docs: {
		fonts: `${docsFolder}/fonts/`,
		images: `${docsFolder}/img/`,
		js: `${docsFolder}/js/`,
		css: `${docsFolder}/css/`,
		html: `${docsFolder}/`,
		libs: `${docsFolder}/libs/`,
	},
	watch: {
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
		html: `${srcFolder}/**/*.html`,
	},
	cleanDist: buildFolder,
	cleanDocs: docsFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
}