(function() {
	"use strict";

	function routes($stateProvider) {
		$stateProvider
			.state('app.services', {
				url: '/services/',
				views: {
					'page@': {
						templateUrl: 'public/html/services/index.html',
						controller: 'Services'
					}
				}
			});
	}

	angular
		.module('app.services')
		.config(routes);

	routes.$inject = ['$stateProvider'];

})();
