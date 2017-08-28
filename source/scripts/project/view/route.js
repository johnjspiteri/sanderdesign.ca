(function() {
	"use strict";

	function internal($stateProvider) {
		$stateProvider
			.state('app.project.view', {
				url: ':clean/',
				resolve: {
					viewResolve: ['$stateParams', 'project', function($stateParams, project) {
						return project.show({clean: $stateParams.clean}).$promise;
					}]
				},
				metaTags: {
					title: ['viewResolve', function(viewResolve) {
						return viewResolve.title + ' - ' + viewResolve.category + ' - ' + viewResolve.year;
					}],
					description: ['viewResolve', function(viewResolve) {
						console.log(viewResolve);
						return viewResolve.description;
					}]
				},
				views: {
					'page@': {
						templateUrl: 'public/html/projects/view/projects.view.html',
						controller: 'ViewController',
						controllerAs: 'self'
					}
				}
			});
	}

	angular
		.module('app.project')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
