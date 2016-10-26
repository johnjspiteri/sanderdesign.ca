/*jslint node: true */
"use strict";

module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	grunt.initConfig({
		location: grunt.file.readJSON('server/config/development.json'),
		minjson: {
			compile: {
				files: {
					'server/data/min/commercial/condo-courtyard.min.json': 'server/data/source/commercial/condo-courtyard.json',
					'server/data/min/commercial/condo-entrance.min.json': 'server/data/source/commercial/condo-entrance.json',
					'server/data/min/commercial/condo-rooftop.min.json': 'server/data/source/commercial/condo-rooftop.json',
					'server/data/min/commercial/st-barts-church.min.json': 'server/data/source/commercial/st-barts-church.json',
					'server/data/min/commercial/symposium-cafe.min.json': 'server/data/source/commercial/symposium-cafe.json',
					'server/data/min/residential/arts-crafts-country-garden.min.json': 'server/data/source/residential/arts-crafts-country-garden.json',
					'server/data/min/residential/asian-fusion.min.json': 'server/data/source/residential/asian-fusion.json',
					'server/data/min/residential/contemporary-court.min.json': 'server/data/source/residential/contemporary-court.json',
					'server/data/min/residential/contemporary-entry.min.json': 'server/data/source/residential/contemporary-entry.json',
					'server/data/min/residential/contemporary-front-entry.min.json': 'server/data/source/residential/contemporary-front-entry.json',
					'server/data/min/residential/contemporary-yard.min.json': 'server/data/source/residential/contemporary-yard.json',
					'server/data/min/residential/country-estate.min.json': 'server/data/source/residential/country-estate.json',
					'server/data/min/residential/formal-garden.min.json': 'server/data/source/residential/formal-garden.json',
					'server/data/min/residential/formal-gartenanlagen.min.json': 'server/data/source/residential/formal-gartenanlagen.json',
					'server/data/min/residential/formal-urban-pocket-garden.min.json': 'server/data/source/residential/formal-urban-pocket-garden.json',
					'server/data/min/residential/french-country.min.json': 'server/data/source/residential/french-country.json',
					'server/data/min/residential/front-entry-court.min.json': 'server/data/source/residential/front-entry-court.json',
					'server/data/min/residential/front-entry-garden.min.json': 'server/data/source/residential/front-entry-garden.json',
					'server/data/min/residential/front-entry.min.json': 'server/data/source/residential/front-entry.json',
					'server/data/min/residential/green-quad.min.json': 'server/data/source/residential/green-quad.json',
					'server/data/min/residential/intimate-courtyard-garden.min.json': 'server/data/source/residential/intimate-courtyard-garden.json',
					'server/data/min/residential/mediterranean-patio.min.json': 'server/data/source/residential/mediterranean-patio.json',
					'server/data/min/residential/modern-classic.min.json': 'server/data/source/residential/modern-classic.json',
					'server/data/min/residential/modern-contemporary-garden.min.json': 'server/data/source/residential/modern-contemporary-garden.json',
					'server/data/min/residential/neo-georgian.min.json': 'server/data/source/residential/neo-georgian.json',
					'server/data/min/residential/outdoor-room.min.json': 'server/data/source/residential/outdoor-room.json',
					'server/data/min/residential/oval-garden.min.json': 'server/data/source/residential/oval-garden.json',
					'server/data/min/residential/rock-garden.min.json': 'server/data/source/residential/rock-garden.json',
					'server/data/min/residential/rustic-oasis.min.json': 'server/data/source/residential/rustic-oasis.json',
					'server/data/min/residential/shade-garden.min.json': 'server/data/source/residential/shade-garden.json',
					'server/data/min/residential/sunken-garden.min.json': 'server/data/source/residential/sunken-garden.json',
					'server/data/min/residential/urban-deck.min.json': 'server/data/source/residential/urban-deck.json',
					'server/data/min/residential/young-residence.min.json': 'server/data/source/residential/young-residence.json',
					'server/data/min/residential/zen-garden.min.json': 'server/data/source/residential/zen-garden.json',
					'server/data/min/residential/zen-pocket-garden.min.json': 'server/data/source/residential/zen-pocket-garden.json',
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
					'public/scripts/app.min.js': [
						'public/scripts/vendor/jquery/dist/jquery.min.js',
						'public/scripts/vendor/lodash/dist/lodash.min.js',
						'public/scripts/vendor/angular/angular.min.js',
						'public/scripts/vendor/angular-animate/angular-animate.min.js',
						'public/scripts/vendor/angular-aria/angular-aria.min.js',
						'public/scripts/vendor/angular-resource/angular-resource.min.js',
						'public/scripts/vendor/angular-loading-bar/build/loading-bar.js',
						'public/scripts/vendor/angular-simple-logger/dist/angular-simple-logger.js',
						'public/scripts/vendor/angular-google-maps/dist/angular-google-maps.js',
						'public/scripts/vendor/angular-ui-router/release/angular-ui-router.min.js',
						'public/scripts/vendor/slick-carousel/slick/slick.js',
						'public/scripts/vendor/angular-slick/dist/slick.js',
						'public/scripts/vendor/angularytics/dist/angularytics.min.js',
						'public/scripts/vendor/angular-material/angular-material.js',
						'public/scripts/vendor/ngMeta/dist/ngMeta.js',
						'public/scripts/app/module.js',
						'public/scripts/app/routes.js',
						'public/scripts/app/config.js',
						'public/scripts/app/run.js',
						'public/scripts/common/module.js',
						'public/scripts/common/escape.directive.js',
						'public/scripts/common/category.filter.js',
						'public/scripts/document/controller.js',
						'public/scripts/navigation/controller.js',
						'public/scripts/footer/controller.js',
						'public/scripts/index/module.js',
						'public/scripts/index/route.js',
						'public/scripts/index/controller.js',
						'public/scripts/project/module.js',
						'public/scripts/project/route.js',
						'public/scripts/project/service.js',
						'public/scripts/project/list.controller.js',
						'public/scripts/project/view.controller.js',
						'public/scripts/services/module.js',
						'public/scripts/services/route.js',
						'public/scripts/services/controller.js',
						'public/scripts/media/module.js',
						'public/scripts/media/route.js',
						'public/scripts/media/controller.js',
						'public/scripts/contact/module.js',
						'public/scripts/contact/route.js',
						'public/scripts/contact/service.js',
						'public/scripts/contact/controller.js',
						'public/scripts/error/module.js',
						'public/scripts/error/routes.js'
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
					'public/css/index.css': 'public/styl/index.styl',
				}
			},
		},
		postcss: {
			options: {
				map: true,
				// map: {
				// 	inline: false, // save all sourcemaps as separate files...
				// 	annotation: 'dist/css/maps/' // ...to the specified directory
				// },
				processors: [
					require('pixrem')(), // add fallbacks for rem units
					require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
					require('cssnano')() // minify the result
				]
			},
			dist: {
				src: 'public/css/*.css'
			}
		},
		puglint: {
			lint: {
				options: {
					config: {
						disallowHtmlText: true,
						validateIndentation: "\t",
						disallowClassAttributeWithStaticValue: true,
						requireClassLiteralsBeforeAttributes: true,
						requireIdLiteralsBeforeAttributes: true,
						validateDivTags: true,
						disallowDuplicateAttributes: true,
						disallowMultipleLineBreaks: true
					}
				},
				src: ['public/partials/**/*.pug']
			},
		},
		pug: {
			compile: {
				options: {
					data: {
						debug: true
					}
				},
				files: [{
					expand: true,
					cwd: 'public/partials',
					src: '**/*.pug',
					dest: 'public/html',
					ext: '.html',
					extDot: 'last'
				}]
			}
		},		newer: {
			options: {
				cache: 'server/config/cache'
			}
		},
		jshint: {
			options: {
				reporter: require('jshint-stylish'),
			},
			jshintrc: ".jshintrc",
			lint: [
				'gruntfile.js',
				'public/**/*.js',
				'server/**/*.js',
				'!public/scripts/app.min.js',
				'!public/scripts/vendor/**/*.js',
				'!node_modules/**/*.js'
			]
		},
		watch: {
			options: {
				livereload: true,
			},
			styles: {
				files: 'public/styl/**/*.styl',
				tasks: 'build-styles'
			},
			partials: {
				files: 'public/partials/**/*.pug',
				tasks: 'build-partials'
			},
			scripts: {
				files: [
					'public/scripts/**/*.js',
					'server/**/*.js',
					'!node_modules/**',
					'!public/scripts/app.min.js',
					'!public/scripts/vendor/**'
				],
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
		open: {
			server: {
				path: 'http://<%= location.ip %>:<%= location.port %>',
				app: 'Safari'
			}
		},
		concurrent: {
			lint: {
				options: {
					logConcurrentOutput: true
				},
				tasks: [
					'newer:puglint:lint',
					'newer:jshint:lint'
				],
			},
			build: {
				options: {
					logConcurrentOutput: true
				},
				tasks: [
					'newer:stylus:compile',
					'newer:pug:compile',
				],
			},
			process: {
				options: {
					logConcurrentOutput: true
				},
				tasks: [
					'postcss',
					'uglify'
				],
			},
		}
	});
	grunt.registerTask('default', [
		'concurrent:lint',
		'concurrent:build',
		'concurrent:process',
		'newer:uglify',
		'express:server',
		'open:server',
		'watch'
	]);
	grunt.registerTask('build-styles', [
		'stylus:compile',
		'postcss',
	]);
	grunt.registerTask('build-partials', [
		'newer:puglint:lint',
		'newer:pug:compile',
	]);
	grunt.registerTask('build-scripts', [
		'newer:jshint:lint',
		'build-server'
	]);
	grunt.registerTask('build-server', [
		'newer:uglify',
		'express:server',
		'watch',
	]);
};
