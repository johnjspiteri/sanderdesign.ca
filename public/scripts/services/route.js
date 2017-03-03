(function() {
	"use strict";

	function routes($stateProvider) {
		$stateProvider
			.state('app.services', {
				url: '/services/',
				metaTags: {
					title: 'Services',
					description: ''
				},
				views: {
					'page@': {
						templateUrl: 'public/html/services/index.html'
					}
				}
			});
	}

	angular
		.module('app.services')
		.config(routes);

	routes.$inject = ['$stateProvider'];

})();
