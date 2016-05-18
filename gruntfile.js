/*jslint node: true */
"use strict";

module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	grunt.initConfig({
		config: grunt.file.readJSON('development.json'),
		minjson: {
			compile: {
				files: {
					'data/min/games.min.json': 'data/source/games.json',
					'data/min/panels.min.json': 'data/source/panels.json',
					'data/min/slides.min.json': 'data/source/slides.json',
					'data/min/users.min.json': 'data/source/users.json'
				}
			}
		},
		stylus: {
			compile: {
				options: {
					linenos: false,
					compress: true,
					firebug: false,
					import: ['config.styl'],
				},
				files: {
					'client/css/index.css': 'client/styl/index.styl',
				}
			},
		},
		jade: {
			compile: {
				options: {
					pretty: true,
				},
				files: [{
					expand: true,
					cwd: 'client/partials',
					src: '**/*.jade',
					dest: 'client/html',
					ext: '.html',
					extDot: 'last'
				}]
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 8 versions']
			},
			dist: {
				files: {
					'client/css/index.css': 'client/css/index.css'
				}
			}
		},
		newer: {
			options: {
				cache: 'client/cache'
			}
		},
		jshint: {
			jshint: ".jshintrc",
			development: ['gruntfile.js', 'client/scripts/**/*.js', '!client/scripts/vendor/**', '!client/scripts/app.min.js', '!node_modules'],
			reporter: require('jshint-stylish')
		},
		watch: {
			options: {
				livereload: true,
			},
			stylus: {
				files: 'client/styl/**/*.styl',
				tasks: 'client'
			},
			jade: {
				files: 'client/partials/**/*.jade',
				tasks: 'client'
			},
			express: {
				files: ['client/scripts/**/*.js', 'server/**/*.js', '!node_modules/**', '!client/scripts/vendor/**'],
				tasks: 'server',
				options: {
					spawn: false
				},
			},
			gruntfile: {
				files: ['gruntfile.js']
			}
		},
		express: {
			server: {
				options: {
					script: './server.js',
				},
			},
		},
		'node-inspector': {
			custom: {
				options: {
					'web-port': 9000,
					'web-host': '<%- config.ip %>',
					'debug-port': 5857,
					'save-live-edit': true,
					'no-preload': true,
					'stack-trace-limit': 4,
					'hidden': ['node_modules']
				}
			}
		},
		concurrent: {
			frontend: {
				options: {
					logConcurrentOutput: true
				},
				tasks: ['stylus', 'jade'],
			}
		}
	});
	grunt.registerTask('default', [
		'client',
		'server'
	]);
	grunt.registerTask('client', [
		'concurrent:frontend',
		'autoprefixer',
		// 'uglify',
		// 'usebanner',
	]);
	grunt.registerTask('server', [
		'jshint:development',
		'express:server',
		// 'minjson',
		// 'open:server',
		'watch'
	]);
};
