(function() {
	"use strict";

	function config ($locationProvider, $urlRouterProvider, $uiViewScrollProvider, $sceDelegateProvider, AngularyticsProvider, cfpLoadingBarProvider, ngMetaProvider, uiGmapGoogleMapApiProvider) {

		$locationProvider.html5Mode(true);

		$urlRouterProvider
			.rule(function($injector, $location) {
				var path = $location.path(),
				hasTrailingSlash = path[path.length-1] === '/';
				if(!hasTrailingSlash) {
					var newPath = path + '/';
					return newPath;
				}});
		$urlRouterProvider
			.otherwise("/404/");

		cfpLoadingBarProvider.latencyThreshold = 200;
		cfpLoadingBarProvider.includeSpinner = true;
		cfpLoadingBarProvider.includeBar = false;
		cfpLoadingBarProvider.spinnerTemplate = '<div class=\'backdrop\'></div>';

		uiGmapGoogleMapApiProvider.configure({
			//    key: 'your api key',
			v: '3.17',
			libraries: 'weather,geometry,visualization'
		});

		AngularyticsProvider.setEventHandlers(['Console', 'GoogleUniversal']);

		ngMetaProvider.useTitleSuffix(true);
		ngMetaProvider.setDefaultTitleSuffix(' | Sander Design');
		ngMetaProvider.setDefaultTag('author', 'Sander Freedman');

	}

	angular
		.module('app')
		.config(config);

	config.$inject = ['$locationProvider', '$urlRouterProvider', '$uiViewScrollProvider', '$sceDelegateProvider', 'AngularyticsProvider', 'cfpLoadingBarProvider', 'ngMetaProvider', 'uiGmapGoogleMapApiProvider'];

})();