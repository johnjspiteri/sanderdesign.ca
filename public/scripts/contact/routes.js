(function() {
	"use strict";

	function routes($stateProvider) {
		$stateProvider
			.state('app.contact', {
				url: '/contact/',
				views: {
					'page@': {
						templateUrl: 'public/html/contact/index.html',
						controller: 'Contact'
					}
				}
			});
	}

	angular
		.module('app.contact')
		.config(routes);

	routes.$inject = ['$stateProvider'];

})();
