(function() {
	"use strict";

	function internal($stateProvider) {
		$stateProvider
			.state('app.index', {
				url: '',
				metaTags: {
					title: 'Experienced Landscape Architecture',
					description: 'Sander Design provides fresh and insightful ideas to help visualize your dream landscape, or improve your existing environment.'
				},
				views: {
					'page@': {
						templateUrl: 'public/html/index/index.html',
						controller: "IndexController as self"
					}
				}
			});
	}

	angular
		.module('app.index')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
