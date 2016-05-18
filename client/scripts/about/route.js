(function() {
	"use strict";

	function routes($locationProvider, $stateProvider) {
		$locationProvider.html5Mode(true);
		$stateProvider
			.state('app.about', {
				url: '/about',
				views: {
					'page@app': {
						templateUrl: 'about/about.html',
					}
				}
			});
	}

	angular
		.module('app.about')
		.config(routes);

	routes.$inject = ['$locationProvider', '$stateProvider'];

})();
