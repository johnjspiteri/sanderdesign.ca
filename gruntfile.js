/*jslint node: true */
"use strict";

module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	grunt.initConfig({
		config: grunt.file.readJSON('server/data/development.json'),
		minjson: {
			compile: {
				files: {
					'server/data/min/residential/arts-and-crafts.min.json': 'server/data/source/residential/arts-and-crafts.json',
					'server/data/min/residential/asian-fusion.min.json': 'server/data/source/residential/asian-fusion.json',
					'server/data/min/residential/contemporary-court.min.json': 'server/data/source/residential/contemporary-court.json',
					'server/data/min/residential/contemporary-entry.min.json': 'server/data/source/residential/contemporary-entry.json',
					'server/data/min/residential/contemporary-yard.min.json': 'server/data/source/residential/contemporary-yard.json',
					'server/data/min/residential/country-estate.min.json': 'server/data/source/residential/country-estate.json',
					'server/data/min/residential/formal-garden.min.json': 'server/data/source/residential/formal-garden.json',
					'server/data/min/residential/formal-gartenanlagen.min.json': 'server/data/source/residential/formal-gartenanlagen.json',
					'server/data/min/residential/french-country.min.json': 'server/data/source/residential/french-country.json',
					'server/data/min/residential/front-entry-court.min.json': 'server/data/source/residential/front-entry-court.json',
					'server/data/min/residential/front-entry-garden.min.json': 'server/data/source/residential/front-entry-garden.json',
					'server/data/min/residential/front-entry.min.json': 'server/data/source/residential/front-entry.json',
					'server/data/min/residential/green-quad.min.json': 'server/data/source/residential/green-quad.json',
					'server/data/min/residential/mediterranean-patio.min.json': 'server/data/source/residential/mediterranean-patio.json',
					'server/data/min/residential/modern-classic.min.json': 'server/data/source/residential/modern-classic.json',
					'server/data/min/residential/neo-georgian.min.json': 'server/data/source/residential/neo-georgian.json',
					'server/data/min/residential/outdoor-room.min.json': 'server/data/source/residential/outdoor-room.json',
					'server/data/min/residential/oval-garden.min.json': 'server/data/source/residential/oval-garden.json',
					'server/data/min/residential/rock-garden.min.json': 'server/data/source/residential/rock-garden.json',
					'server/data/min/residential/rustic-oasis.min.json': 'server/data/source/residential/rustic-oasis.json',
					'server/data/min/residential/sunken-garden.min.json': 'server/data/source/residential/sunken-garden.json',
					'server/data/min/residential/urban-deck.min.json': 'server/data/source/residential/urban-deck.json',
					'server/data/min/residential/zen-garden.min.json': 'server/data/source/residential/zen-garden.json',
					'server/data/min/commercial/condo-courtyard.min.json': 'server/data/source/commercial/condo-courtyard.json',
					'server/data/min/commercial/condo-entrance.min.json': 'server/data/source/commercial/condo-entrance.json',
					'server/data/min/commercial/condo-rooftop.min.json': 'server/data/source/commercial/condo-rooftop.json',
					'server/data/min/commercial/st-barts-church.min.json': 'server/data/source/commercial/st-barts-church.json',
					'server/data/min/commercial/symposium-cafe.min.json': 'server/data/source/commercial/symposium-cafe.json'
				}
			}
		},
		pageres: {
			multipleUrls: {
				options: {
					urls: ['http://sander-interfaceagency.rhcloud.com', 'http://sander-interfaceagency.rhcloud.com/projects/', 'http://sander-interfaceagency.rhcloud.com/projects/contemporary-court/', 'http://sander-interfaceagency.rhcloud.com/media/', 'http://sander-interfaceagency.rhcloud.com/contact/'],
					sizes: ['375x1000', '768x1000'],
					dest: '_notes/screenshots',
					filename: '{{url}}--{{size}}',
					crop: false
				}
			}
		},
		uglify: {
			options: {
				beautify: true,
				mangle: false,
				preserveComments: true,
				compress: {
					// drop_console: false,
					sequences: false
				}
			},
			target: {
				files: {
					'client/scripts/app.min.js': [
						'client/scripts/vendor/jquery/dist/jquery.min.js',
						'client/scripts/vendor/angular/angular.min.js',
						'client/scripts/vendor/angular-animate/angular-animate.min.js',
						'client/scripts/vendor/angular-cookies/angular-cookies.min.js',
						'client/scripts/vendor/angular-aria/angular-aria.min.js',
						'client/scripts/vendor/angular-resource/angular-resource.min.js',
						'client/scripts/vendor/angular-loading-bar/build/loading-bar.js',
						'client/scripts/vendor/angular-google-maps/dist/angular-google-maps.js',
						'client/scripts/vendor/angular-ui-router/release/angular-ui-router.min.js',
						'client/scripts/vendor/angular-elastic/elastic.js',
						'client/scripts/vendor/lodash/dist/lodash.min.js',
						'client/scripts/vendor/slick-carousel/slick/slick.js',
						'client/scripts/vendor/angular-slick/dist/slick.js',
						'client/scripts/vendor/angularytics/dist/angularytics.min.js',
						'client/scripts/vendor/angular-material/angular-material.js',
						'client/scripts/vendor/ngMeta/dist/ngMeta.js',


					'client/scripts/app/module.js',
					'client/scripts/app/routes.js',
					'client/scripts/app/config.js',
					'client/scripts/app/run.js',

					'client/scripts/common/module.js',
					'client/scripts/common/escape.directive.js',
					'client/scripts/common/category.filter.js',

					'client/scripts/document/controller.js',
					'client/scripts/navigation/controller.js',
					'client/scripts/footer/controller.js',

					'client/scripts/index/module.js',
					'client/scripts/index/route.js',
					'client/scripts/index/controller.js',

					'client/scripts/project/module.js',
					'client/scripts/project/route.js',
					'client/scripts/project/service.js',
					'client/scripts/project/list.controller.js',
					'client/scripts/project/view.controller.js',

					'client/scripts/services/module.js',
					'client/scripts/services/route.js',
					'client/scripts/services/controller.js',

					'client/scripts/media/module.js',
					'client/scripts/media/route.js',
					'client/scripts/media/controller.js',

					'client/scripts/contact/module.js',
					'client/scripts/contact/route.js',
					'client/scripts/contact/service.js',
					'client/scripts/contact/controller.js',

					'client/scripts/error/module.js',
					'client/scripts/error/routes.js',

					]
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
			options: {
				reporter: require('jshint-stylish'),
			},
			jshintrc: ".jshintrc",
			all: [
				'gruntfile.js',
				'client/**/*.js',
				'server/**/*.js',
				'!client/scripts/app.min.js',
				'!client/scripts/vendor/**/*.js',
				'!server/data/**/*.js',
				'!node_modules/**/*.js'
			]
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
				tasks: [
					'stylus',
					'jade',
					'jshint:all',
					// 'minjson',
				]
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
		// 'usebanner',
	]);
	grunt.registerTask('server', [
		// 'uglify',
		'express:server',
		// 'open:server',
		// 'pageres:multipleUrls',
		'watch'
	]);
};
