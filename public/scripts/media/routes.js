(function() {
	"use strict";

	function routes($stateProvider) {
		$stateProvider
			.state('app.media', {
				url: '/media/',
				views: {
					'page@': {
						templateUrl: 'public/html/media/index.html',
					controller: 'Media'
					}
				}
			});
	}

	angular
		.module('app.media')
		.config(routes);

	routes.$inject = ['$stateProvider'];

})();
