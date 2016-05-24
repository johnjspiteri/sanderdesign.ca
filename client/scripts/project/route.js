(function() {
	"use strict";

	function routes($locationProvider, $stateProvider) {
		$locationProvider.html5Mode(true);
		$stateProvider
			.state('app.list', {
				url: '/projects',
				views: {
					'page@app': {
						templateUrl: 'projects/list.html',
						cache: false,
						// resolve: {
						// 	listResolve: ['projects', function(projects) {
						// 		return projects.query().$promise;
						// 	}]
						// },
						// controller: "List"
					}
				}
			})
			.state('app.view', {
				abstract: true,
				url: '/projects/:id',
				views: {
					'page@app': {
						templateUrl: 'projects/view.html',
						// resolve: {
						// 	viewResolve: ['$stateParams', 'projects', function( $stateParams, projects) {
						// 		return projects.show({id: $stateParams.id}).$promise;
						// 	}]
						// },
						// controller: 'View'
					}
				}
			});
	}

	angular
		.module('app.project')
		.config(routes);

	routes.$inject = ['$locationProvider', '$stateProvider'];

})();
