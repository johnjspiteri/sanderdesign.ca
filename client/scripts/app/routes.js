(function() {
	"use strict";

	function routes($locationProvider, $stateProvider, ngMetaProvider) {
		$locationProvider.html5Mode(true);

		$stateProvider
			.state('app', {
				abstract: true,
				url: '',
				views: {
					'document': {
						templateUrl: 'document/document.html',
						controller: 'Document'
					},
					'navigation@': {
						templateUrl: 'navigation/navigation.html',
						controller: 'Document'
					},
					'header@app': {
						templateUrl: 'header/header.html'
					},
					'footer@': {
						templateUrl: 'footer/footer.html',
						controller: 'Footer'
					}
				}
			});
	}

	angular
		.module('app')
		.config(routes);

	routes.$inject = ['$locationProvider', '$stateProvider', 'ngMetaProvider'];

})();