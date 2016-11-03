(function() {
	"use strict";

	function routes($locationProvider, $stateProvider) {
		$locationProvider.html5Mode(true);
		$stateProvider
			.state('app.services', {
				url: '/services/',
				views: {
					'page@app': {
						templateUrl: 'public/html/services/services.html',
						controller: 'Services'
					}
				}
			});
	}

	angular
		.module('app.services')
		.config(routes);

	routes.$inject = ['$locationProvider', '$stateProvider'];

})();
