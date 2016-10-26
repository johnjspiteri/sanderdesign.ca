(function() {
	"use strict";

	function routes($locationProvider, $stateProvider, ngMetaProvider) {
		$locationProvider.html5Mode(true);
		$stateProvider
			.state('app.error', {
				meta: {
					title: '404 Page Not Found',
					description: 'This is the description shown in Google search results'
				},
				url: '/404',
				views: {
					'page@app': {
						templateUrl: 'error/error.html'
					}
				}
			});
	}

	angular
		.module('app.error')
		.config(routes);

		routes.$inject = ['$locationProvider', '$stateProvider', 'ngMetaProvider'];

})();
