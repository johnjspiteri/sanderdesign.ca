(function() {
	"use strict";

	function config ($urlRouterProvider, $uiViewScrollProvider, $sceDelegateProvider, cfpLoadingBarProvider, AngularyticsProvider, ngMetaProvider, uiGmapGoogleMapApiProvider) {

		uiGmapGoogleMapApiProvider.configure({
			//    key: 'your api key',
			v: '3.17',
			libraries: 'weather,geometry,visualization'
		});

		AngularyticsProvider.setEventHandlers(['Console', 'GoogleUniversal']);

		ngMetaProvider.useTitleSuffix(true);
		ngMetaProvider.setDefaultTitleSuffix(' | Sander Design');
		ngMetaProvider.setDefaultTag('author', 'Sander Freedmanw');

		$urlRouterProvider.otherwise('/404');
		$urlRouterProvider.rule(function ($injector, $location) {
			var path = $location.url();

			if ('/' === path[path.length - 1]) {
				return path.replace(/\/$/, '');
			}
			if (path.indexOf('/?') > 0) {
				return path.replace('/?', '?');
			}
			return false;
		});

		cfpLoadingBarProvider.spinnerTemplate = '<div id="loading-bar-spinner"><div class="spinner-icon"></div></div><div id="panel"></div>';
		cfpLoadingBarProvider.latencyThreshold = 50;
		cfpLoadingBarProvider.includeSpinner = true;
		cfpLoadingBarProvider.includeBar = false;

	}

	angular
		.module('app')
		.config(config);

	config.$inject = ['$urlRouterProvider', '$uiViewScrollProvider', '$sceDelegateProvider', 'cfpLoadingBarProvider', 'AngularyticsProvider', 'ngMetaProvider', 'uiGmapGoogleMapApiProvider'];

})();