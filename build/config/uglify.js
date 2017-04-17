module.exports = {
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
				'public/scripts/vendor/angular-local-storage/dist/angular-local-storage.js',
				'public/scripts/vendor/angular-simple-logger/dist/angular-simple-logger.js',
				'public/scripts/vendor/angular-google-maps/dist/angular-google-maps.js',
				'public/scripts/vendor/angular-ui-router/release/angular-ui-router.min.js',
				'public/scripts/vendor/ui-router-metatags/dist/ui-router-metatags.min.js',
				'public/scripts/vendor/slick-carousel/slick/slick.js',
				'public/scripts/vendor/angular-slick-carousel/dist/angular-slick.min.js',
				'public/scripts/vendor/angularytics/dist/angularytics.min.js',
				'public/scripts/vendor/angular-material/angular-material.js',
				'public/scripts/app/module.js',
				'public/scripts/app/route.js',
				'public/scripts/app/config.js',
				'public/scripts/app/factory.js',
				'public/scripts/app/run.js',
				'public/scripts/common/module.js',
				'public/scripts/common/directive/escape.js',
				'public/scripts/common/filter/category.js',
				'public/scripts/common/filter/tag.js',
				'public/scripts/header/controller.js',
				'public/scripts/panel/controller.js',
				'public/scripts/footer/controller.js',
				'public/scripts/index/module.js',
				'public/scripts/index/controller.js',
				'public/scripts/index/route.js',
				'public/scripts/project/module.js',
				'public/scripts/project/service.js',
				'public/scripts/project/list/controller.js',
				'public/scripts/project/list/route.js',
				'public/scripts/project/view/controller.js',
				'public/scripts/project/view/route.js',
				'public/scripts/services/module.js',
				'public/scripts/services/route.js',
				'public/scripts/media/module.js',
				'public/scripts/media/route.js',
				'public/scripts/contact/module.js',
				'public/scripts/contact/route.js',
				'public/scripts/error/module.js',
				'public/scripts/error/route.js'
			]
		}
	}
};