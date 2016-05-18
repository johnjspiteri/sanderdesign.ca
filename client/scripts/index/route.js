(function() {
	"use strict";

	function routes($locationProvider, $stateProvider) {
		$locationProvider.html5Mode(true);

		$stateProvider
			.state('app.index', {
				url: '/',
				views: {
					'page@app': {
						templateUrl: 'index/index.html',
						controller: "Index"
					}
				}
			});
	}

	angular
		.module('app.index')
		.config(routes);

	routes.$inject = ['$locationProvider', '$stateProvider'];

})();
