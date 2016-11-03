(function() {
	"use strict";

	function routes($locationProvider, $stateProvider) {
		$locationProvider.html5Mode(true);
		$stateProvider
			.state('app.media', {
				url: '/media/',
				views: {
					'page@app': {
						templateUrl: 'public/html/media/list.html',
					}
				}
			});
	}

	angular
		.module('app.media')
		.config(routes);

	routes.$inject = ['$locationProvider', '$stateProvider'];

})();
