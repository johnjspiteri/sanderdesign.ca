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
						templateUrl: 'public/html/contact/contact.html'
					}
				}
			});
	}

	angular
		.module('app.contact')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
