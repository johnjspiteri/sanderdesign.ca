(function() {
	"use strict";

	function internal($stateProvider) {
		$stateProvider
			.state('app', {
				abstract: true,
				url: '/',
				views: {
					'panel': {
						templateUrl: 'public/html/panel/panel.html',
						controller: 'PanelController as self'
					},
					'header': {
						templateUrl: 'public/html/header/header.html',
						controller: 'HeaderController as self'
					},
					'footer': {
						templateUrl: 'public/html/footer/footer.html',
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
