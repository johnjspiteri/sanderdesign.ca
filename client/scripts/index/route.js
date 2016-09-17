(function() {
	"use strict";

	function routes($stateProvider) {
		$stateProvider
			.state('app.index', {
				url: '/',
				views: {
					// 'page@app': {
					// 	templateUrl: '/client/html/index/index.html',
					// 	controller: "Index"
					// }
				}
			});
	}

	angular
		.module('app.index')
		.config(routes);

	routes.$inject = ['$stateProvider'];

})();
