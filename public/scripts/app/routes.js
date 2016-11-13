(function() {
	"use strict";

	function routes($stateProvider) {
		$stateProvider
			.state('app', {
				abstract: true,
				url: '',
				views: {
					'document': {
						templateUrl: 'public/html/document/document.html',
						controller: 'Document'
					},
					'navigation@': {
						templateUrl: 'public/html/navigation/navigation.html',
						controller: 'Document'
					},
					'header@app': {
						templateUrl: 'public/html/header/header.html'
					},
					'footer': {
						templateUrl: 'public/html/footer/footer.html',
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