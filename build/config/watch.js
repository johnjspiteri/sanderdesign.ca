module.exports = {
	options: {
		livereload: true
	},
	data: {
		files: 'server/data/source/**/*.json',
		tasks: 'build-data'
	},
	partials: {
		files: 'public/partials/**/*.pug',
		tasks: 'build-partials'
	},
	scripts: {
		files: ['gruntfile.js', 'public/scripts/**/*.js', 'server/**/*.js', '!node_modules/**', '!public/scripts/app.min.js', '!public/scripts/vendor/**'],
		tasks: 'build-scripts',
		options: {
			spawn: false
		}
	},
	styles: {
		files: 'public/style/**/*.styl',
		tasks: 'build-styles'
	},
	gruntfile: {
		files: ['gruntfile.js']
	}
};