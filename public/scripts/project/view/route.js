(function() {
	"use strict";

	function internal($stateProvider) {
		$stateProvider
			.state('app.view', {
				url: '/projects/:id/',
				resolve: {
					viewResolve: ['$stateParams', 'project', function( $stateParams, project) {
						return project.show({id: $stateParams.id}).$promise;
					}]
				},
				metaTags: {
					title: '',
					description: ''
					// ngMeta.setTitle($scope.project.title);
					// ngMeta.setTag('description', $scope.project.description);
				},
				views: {
					'page@': {
						templateUrl: 'public/html/projects/view/index.html',
						controller: 'View as self'
					}
				}
			});
	}

	angular
		.module('app.project')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
