(function() {
	"use strict";

	function internal ($locationProvider, $urlRouterProvider, AngularyticsProvider, cfpLoadingBarProvider, localStorageServiceProvider, UIRouterMetatagsProvider) {

		$locationProvider.html5Mode(true);

		$urlRouterProvider
			.rule(function($injector, $location) {
				var path = $location.path(),
				hasTrailingSlash = path[path.length-1] === '/';
				if(!hasTrailingSlash) {
					var newPath = path + '/';
					return newPath;
				}})
			.when(/(s).*/, '/services/')
			.when(/(m).*/, '/media/')
			.when(/(c).*/, '/contact/')
			.otherwise("/404/");

		cfpLoadingBarProvider.latencyThreshold = 200;
		cfpLoadingBarProvider.includeSpinner = true;
		cfpLoadingBarProvider.includeBar = false;
		cfpLoadingBarProvider.spinnerTemplate = '<div class=\'backdrop\'></div>';

		AngularyticsProvider.setEventHandlers(['Console', 'GoogleUniversal']);

		localStorageServiceProvider
			.setPrefix('sander')
			.setStorageType('localStorage')
			.setNotify(true, true);

		UIRouterMetatagsProvider
			.setTitleSuffix(' | Sander Design');
		// .setStaticProperties({
		// 	'fb:app_id': 'your fb app id',
		// 	'og:site_name': 'your site name'
		// })
		// .setOGURL(true);

	}

	angular
		.module('app')
		.config(internal);

	internal.$inject = ['$locationProvider', '$urlRouterProvider', 'AngularyticsProvider', 'cfpLoadingBarProvider', 'localStorageServiceProvider', 'UIRouterMetatagsProvider'];

})();