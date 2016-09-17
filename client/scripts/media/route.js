(function() {
	"use strict";

	function routes($stateProvider) {
		$stateProvider
			.state('app.media', {
				url: '/media/',
				views: {
					'page@app': {
						templateUrl: 'media/list.html',
					}
				}
			});
	}

	angular
		.module('app.media')
		.config(routes);

	routes.$inject = ['$stateProvider'];

})();
