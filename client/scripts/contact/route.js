(function() {
	"use strict";

	function routes($locationProvider, $stateProvider) {
		$locationProvider.html5Mode(true);
		$stateProvider
			.state('app.contact', {
				url: '/contact',
				views: {
					'page@app': {
						templateUrl: 'contact/contact.html',
						controller: 'Contact'
					}
				}
			});
	}

	angular
		.module('app.contact')
		.config(routes);

	routes.$inject = ['$locationProvider', '$stateProvider'];

})();
