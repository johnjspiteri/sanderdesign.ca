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
					'data/min/residential/arts-and-crafts.min.json': 'data/source/residential/arts-and-crafts.json',
					'data/min/residential/asian-fusion.min.json': 'data/source/residential/asian-fusion.json',
					'data/min/residential/contemporary-court.min.json': 'data/source/residential/contemporary-court.json',
					'data/min/residential/contemporary-entry.min.json': 'data/source/residential/contemporary-entry.json',
					'data/min/residential/contemporary-yard.min.json': 'data/source/residential/contemporary-yard.json',
					'data/min/residential/country-estate.min.json': 'data/source/residential/country-estate.json',
					'data/min/residential/formal-garden.min.json': 'data/source/residential/formal-garden.json',
					'data/min/residential/formal-gartenanlagen.min.json': 'data/source/residential/formal-gartenanlagen.json',
					'data/min/residential/french-country.min.json': 'data/source/residential/french-country.json',
					'data/min/residential/front-entry-court.min.json': 'data/source/residential/front-entry-court.json',
					'data/min/residential/front-entry-garden.min.json': 'data/source/residential/front-entry-garden.json',
					'data/min/residential/front-entry.min.json': 'data/source/residential/front-entry.json',
					'data/min/residential/green-quad.min.json': 'data/source/residential/green-quad.json',
					'data/min/residential/mediterranean-patio.min.json': 'data/source/residential/mediterranean-patio.json',
					'data/min/residential/modern-classic.min.json': 'data/source/residential/modern-classic.json',
					'data/min/residential/neo-georgian.min.json': 'data/source/residential/neo-georgian.json',
					'data/min/residential/outdoor-room.min.json': 'data/source/residential/outdoor-room.json',
					'data/min/residential/oval-garden.min.json': 'data/source/residential/oval-garden.json',
					'data/min/residential/rock-garden.min.json': 'data/source/residential/rock-garden.json',
					'data/min/residential/rustic-oasis.min.json': 'data/source/residential/rustic-oasis.json',
					'data/min/residential/sunken-garden.min.json': 'data/source/residential/sunken-garden.json',
					'data/min/residential/urban-deck.min.json': 'data/source/residential/urban-deck.json',
					'data/min/residential/zen-garden.min.json': 'data/source/residential/zen-garden.json',
					'data/min/commercial/condo-courtyard.min.json': 'data/source/commercial/condo-courtyard.json',
					'data/min/commercial/condo-entrance.min.json': 'data/source/commercial/condo-entrance.json',
					'data/min/commercial/condo-rooftop.min.json': 'data/source/commercial/condo-rooftop.json',
					'data/min/commercial/st-barts-church.min.json': 'data/source/commercial/st-barts-church.json',
					'data/min/commercial/symposium-cafe.min.json': 'data/source/commercial/symposium-cafe.json'
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
		'minjson',
		// 'open:server',
		'watch'
	]);
};
