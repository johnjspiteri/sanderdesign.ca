(function() {
	"use strict";

	function internal($stateProvider) {
		$stateProvider
			.state('app', {
				abstract: true,
				url: '',
				views: {
					'panel': {
						templateUrl: 'public/html/panel/index.html',
						controller: 'PanelController as self'
					},
					'header': {
						templateUrl: 'public/html/header/index.html',
						controller: 'HeaderController as self'
					},
					'footer': {
						templateUrl: 'public/html/footer/index.html',
						controller: 'FooterController as self'
					}
				}
			});
	}

	angular
		.module('app')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();