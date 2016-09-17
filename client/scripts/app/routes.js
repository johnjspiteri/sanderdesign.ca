(function() {
	"use strict";

	function routes($stateProvider, ngMetaProvider) {
		$stateProvider
			.state('app', {
				abstract: true,
				url: '',
				views: {
					'document': {
						templateUrl: '/client/html/document/document.html',
						// controller: 'Document'
					},
					// 'navigation@': {
					// 	templateUrl: 'html/navigation/navigation.html',
					// 	// controller: 'Document'
					// },
					'header': {
						templateUrl: '/client/html/header/header.html'
					},
					// 'footer': {
					// 	templateUrl: 'html/footer/footer.html',
					// 	controller: 'Footer'
					// }
				}
			});
	}

	angular
		.module('app')
		.config(routes);

	routes.$inject = ['$stateProvider', 'ngMetaProvider'];

})();