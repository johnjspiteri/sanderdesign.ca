(function() {
	"use strict";

	function internal($stateProvider) {
		$stateProvider
			.state('app.contact', {
				url: '/contact/',
				metaTags: {
					title: '',
					description: ''
				},
				views: {
					'page@': {
						templateUrl: 'public/html/contact/index.html'
					}
				}
			});
	}

	angular
		.module('app.contact')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
