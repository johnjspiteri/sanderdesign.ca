(function() {
	"use strict";

	function config ($locationProvider, $urlRouterProvider, $uiViewScrollProvider, $sceDelegateProvider, AngularyticsProvider, cfpLoadingBarProvider, localStorageServiceProvider, UIRouterMetatagsProvider, uiGmapGoogleMapApiProvider) {

		$locationProvider.html5Mode(true);

		$urlRouterProvider
			.rule(function($injector, $location) {
				var path = $location.path(),
				hasTrailingSlash = path[path.length-1] === '/';
				if(!hasTrailingSlash) {
					var newPath = path + '/';
					return newPath;
				}})
			// .when('/boardgames/:id/', '/boardgames/:id/review/')
			.when(/(s).*/, '/services/')
			.when(/(m).*/, '/media/')
			.when(/(c).*/, '/contact/')
			.otherwise("/404/");

		cfpLoadingBarProvider.latencyThreshold = 200;
		cfpLoadingBarProvider.includeSpinner = true;
		cfpLoadingBarProvider.includeBar = false;
		cfpLoadingBarProvider.spinnerTemplate = '<div class=\'backdrop\'></div>';

		uiGmapGoogleMapApiProvider.configure({
			key: 'AIzaSyCDzFTLOKdyRRh3AxcluBO8U6ZHApytmBE',
			v: '3.17',
libraries: 'weather,geometry,visualization'
		});

		AngularyticsProvider.setEventHandlers(['Console', 'GoogleUniversal']);

		localStorageServiceProvider
			.setPrefix('boardwalk')
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
		.config(config);

	config.$inject = ['$locationProvider', '$urlRouterProvider', '$uiViewScrollProvider', '$sceDelegateProvider', 'AngularyticsProvider', 'cfpLoadingBarProvider', 'localStorageServiceProvider', 'UIRouterMetatagsProvider', 'uiGmapGoogleMapApiProvider'];

})();