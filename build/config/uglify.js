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
				'source/scripts/vendor/jquery/dist/jquery.min.js',
				'source/scripts/vendor/lodash/dist/lodash.min.js',
				'source/scripts/vendor/angular/angular.min.js',
				'source/scripts/vendor/angular-animate/angular-animate.min.js',
				'source/scripts/vendor/angular-aria/angular-aria.min.js',
				'source/scripts/vendor/angular-resource/angular-resource.min.js',
				'source/scripts/vendor/angular-loading-bar/build/loading-bar.js',
				'source/scripts/vendor/angular-local-storage/dist/angular-local-storage.js',
				'source/scripts/vendor/ngmap/build/scripts/ng-map.min.js',
				'source/scripts/vendor/angular-ui-router/release/angular-ui-router.min.js',
				'source/scripts/vendor/ui-router-metatags/dist/ui-router-metatags.min.js',
				'source/scripts/vendor/slick-carousel/slick/slick.js',
				'source/scripts/vendor/angular-slick-carousel/dist/angular-slick.min.js',
				'source/scripts/vendor/angularytics/dist/angularytics.min.js',
				'source/scripts/vendor/angular-material/angular-material.js',
				'source/scripts/app/module.js',
				'source/scripts/app/route.js',
				'source/scripts/app/config.js',
				'source/scripts/app/factory.js',
				'source/scripts/app/run.js',
				'source/scripts/common/module.js',
				'source/scripts/common/directive/escape.js',
				'source/scripts/common/filter/category.js',
				'source/scripts/common/filter/tag.js',
				'source/scripts/header/controller.js',
				'source/scripts/panel/controller.js',
				'source/scripts/footer/controller.js',
				'source/scripts/index/module.js',
				'source/scripts/index/controller.js',
				'source/scripts/index/route.js',
				'source/scripts/project/module.js',
				'source/scripts/project/service.js',
				'source/scripts/project/list/controller.js',
				'source/scripts/project/list/route.js',
				'source/scripts/project/view/controller.js',
				'source/scripts/project/view/route.js',
				'source/scripts/services/module.js',
				'source/scripts/services/route.js',
				'source/scripts/media/module.js',
				'source/scripts/media/route.js',
				'source/scripts/contact/module.js',
				'source/scripts/contact/route.js',
				'source/scripts/error/module.js',
				'source/scripts/error/route.js',
				'public/templates/index.js'
			]
		}
	}
};