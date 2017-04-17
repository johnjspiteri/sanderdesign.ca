(function() {
	"use strict";

	function internal($stateProvider) {
		$stateProvider
			.state('app.project.view', {
				url: ':id/',
				resolve: {
					viewResolve: ['$stateParams', 'project', function( $stateParams, project) {
						return project.show({id: $stateParams.id}).$promise;
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
						templateUrl: 'public/html/projects/view/index.html',
						controller: 'ViewController as self'
					}
				}
			});
	}

	angular
		.module('app.project')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
