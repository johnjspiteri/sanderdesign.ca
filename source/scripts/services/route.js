(function() {
	"use strict";

	function routes($stateProvider) {
		$stateProvider
			.state('app.services', {
				url: '/services/',
				metaTags: {
					title: 'Services',
					description: 'Sander Freedman is interested in sustainable design and environmental issues, and has over 25 years experience in environmental related work and design. His body of work experience covers an array of projects from program coordinator at Canada Parks and Wilderness, where he raised awareness for the environment, to co founding "Ecological Resource Group", an organisation for community naturalisation in the Annex neighbourhood in order to create a healthier overall urban forest.'
				},
				views: {
					'page@': {
						templateUrl: 'public/html/services/index.html'
					}
				}
			});
	}

	angular
		.module('app.services')
		.config(routes);

	routes.$inject = ['$stateProvider'];

})();
