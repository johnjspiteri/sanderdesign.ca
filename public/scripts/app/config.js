(function() {
	"use strict";

	function config ($locationProvider, $urlRouterProvider, $uiViewScrollProvider, $sceDelegateProvider, AngularyticsProvider, ngMetaProvider, uiGmapGoogleMapApiProvider) {

		$locationProvider.html5Mode(true);

		$urlRouterProvider.otherwise("/404/");
		$urlRouterProvider.rule(function($injector, $location) {

			var path = $location.path();
			var hasTrailingSlash = path[path.length-1] === '/';

			if(!hasTrailingSlash) {
				var newPath = path + '/';
				return newPath;
			}
		});

		uiGmapGoogleMapApiProvider.configure({
			//    key: 'your api key',
			v: '3.17',
			libraries: 'weather,geometry,visualization'
		});

		AngularyticsProvider.setEventHandlers(['Console', 'GoogleUniversal']);

		ngMetaProvider.useTitleSuffix(true);
		ngMetaProvider.setDefaultTitleSuffix(' | Sander Design');
		ngMetaProvider.setDefaultTag('author', 'Sander Freedman');

		// cfpLoadingBarProvider.spinnerTemplate = '<div class=\'loadbar\'><div class=\'loadbar__icon\'></div></div>';
		// cfpLoadingBarProvider.latencyThreshold = 50;
		// cfpLoadingBarProvider.includeSpinner = true;
		// cfpLoadingBarProvider.includeBar = false;

	}

	angular
		.module('app')
		.config(config);

	config.$inject = ['$locationProvider', '$urlRouterProvider', '$uiViewScrollProvider', '$sceDelegateProvider', 'AngularyticsProvider', 'ngMetaProvider', 'uiGmapGoogleMapApiProvider'];

})();