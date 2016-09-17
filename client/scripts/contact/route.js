(function() {
	"use strict";

	function routes($stateProvider) {
		$stateProvider
			.state('app.contact', {
				url: '/contact/',
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

	routes.$inject = ['$stateProvider'];

})();
