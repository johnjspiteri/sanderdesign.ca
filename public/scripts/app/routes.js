(function() {
	"use strict";

	function routes($stateProvider) {
		$stateProvider
			.state('app', {
				abstract: true,
				url: '',
				views: {
					'panel': {
						templateUrl: 'public/html/panel/index.html',
						controller: 'Panel'
					},
					'header': {
						templateUrl: 'public/html/header/index.html',
						controller: 'Header'
					},
					'footer': {
						templateUrl: 'public/html/footer/index.html',
						controller: 'Footer'
					}
				}
			});
	}

	angular
		.module('app')
		.config(routes);

	routes.$inject = ['$stateProvider'];

})();