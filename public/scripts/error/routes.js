(function() {
	"use strict";

	function routes($stateProvider) {
		$stateProvider
			.state('app.error', {
				meta: {
					title: '404 Page Not Found',
					description: 'This is the description shown in Google search results'
				},
				url: '/404/',
				views: {
					'page@app': {
						templateUrl: 'public/html/error/error.html'
					}
				}
			});
	}

	angular
		.module('app.error')
		.config(routes);

		routes.$inject = ['$stateProvider'];

})();
