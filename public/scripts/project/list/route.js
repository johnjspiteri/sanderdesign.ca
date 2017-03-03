(function() {
	"use strict";

	function internal($stateProvider) {
		$stateProvider
			.state('app.project', {
				url: '/projects/',
				metaTags: {
					title: 'Project Listing',
					description: 'A current list of Sander Design projects, concepts and proposals.'
				},
				views: {
					'page@': {
						templateUrl: 'public/html/projects/list/index.html',
						resolve: {
							listResolve: ['project', function(project) {
								return project.query().$promise;
							}]
						},
						controller: "List as self"
					}
				}
			});
	}

	angular
		.module('app.project')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
