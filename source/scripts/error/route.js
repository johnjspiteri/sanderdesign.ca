(function() {
	"use strict";

	function routes($stateProvider) {
		$stateProvider
			.state('app.error', {
				url: '404/',
				views: {
					'page@': {
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
