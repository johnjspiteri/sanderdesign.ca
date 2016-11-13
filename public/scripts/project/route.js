(function() {
	"use strict";

	function routes($stateProvider) {
		$stateProvider
			.state('app.list', {
				url: '/projects/',
				views: {
					'page@app': {
						templateUrl: 'public/html/projects/list.html',
						resolve: {
							listResolve: ['project', function(project) {
								return project.query().$promise;
							}]
						},
						controller: "List"
					}
				}
			})
			.state('app.view', {
				url: '/projects/:id/',
				views: {
					'page@app': {
						templateUrl: 'public/html/projects/view.html',
						resolve: {
							viewResolve: ['$stateParams', 'project', function( $stateParams, project) {
								return project.show({id: $stateParams.id}).$promise;
							}]
						},
						controller: 'View'
					}
				}
			});
	}

	angular
		.module('app.project')
		.config(routes);

	routes.$inject = ['$stateProvider'];

})();
