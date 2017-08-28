(function() {
	"use strict";

	function routes($stateProvider) {
		$stateProvider
			.state('app.media', {
				url: 'media/',
				metaTags: {
					title: 'Experienced Landscape Architecture',
					description: 'Sander Design provides fresh and insightful ideas to help visualize your dream landscape, or improve your existing environment.'
				},
				views: {
					'page@': {
						templateUrl: 'public/html/media/media.html'
					}
				}
			});
	}

	angular
		.module('app.media')
		.config(routes);

	routes.$inject = ['$stateProvider'];

})();
