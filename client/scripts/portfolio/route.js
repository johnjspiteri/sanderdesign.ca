(function() {
	"use strict";

	function routes($locationProvider, $stateProvider) {
		$locationProvider.html5Mode(true);
		$stateProvider
			.state('app.list', {
				url: '/portfolio',
				views: {
					'page@app': {
						templateUrl: 'portfolio/list.html',
						cache: false,
						resolve: {
							listResolve: ['portfolio', function(portfolio) {
								return portfolio.query().$promise;
							}]
						},
						controller: "List"
					}
				}
			})
			.state('app.view', {
				abstract: true,
				url: '/portfolio/:id',
				views: {
					'page@app': {
						templateUrl: 'portfolio/view.html',
						resolve: {
							viewResolve: ['$stateParams', 'portfolio', function( $stateParams, portfolio) {
								return portfolio.show({id: $stateParams.id}).$promise;
							}]
						},
						controller: 'View'
					}
				}
			});
	}

	angular
		.module('app.portfolio')
		.config(routes);

	routes.$inject = ['$locationProvider', '$stateProvider'];

})();
