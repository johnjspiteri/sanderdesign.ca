(function() {
	"use strict";

	function config ($urlRouterProvider, $uiViewScrollProvider, $sceDelegateProvider, AngularyticsProvider, cfpLoadingBarProvider, ngMetaProvider, uiGmapGoogleMapApiProvider) {

		uiGmapGoogleMapApiProvider.configure({
			//    key: 'your api key',
			v: '3.17',
			libraries: 'weather,geometry,visualization'
		});

		AngularyticsProvider.setEventHandlers(['Console', 'GoogleUniversal']);

		ngMetaProvider.useTitleSuffix(true);
		ngMetaProvider.setDefaultTitleSuffix(' | Sander Design');
		ngMetaProvider.setDefaultTag('author', 'Sander Freedman');

		cfpLoadingBarProvider.spinnerTemplate = '<div class=\'loadbar\'><div class=\'loadbar__icon\'></div></div>';
		cfpLoadingBarProvider.latencyThreshold = 50;
		cfpLoadingBarProvider.includeSpinner = true;
		cfpLoadingBarProvider.includeBar = false;

	}

	angular
		.module('app')
		.config(config);

	config.$inject = ['$urlRouterProvider', '$uiViewScrollProvider', '$sceDelegateProvider', 'AngularyticsProvider', 'cfpLoadingBarProvider', 'ngMetaProvider', 'uiGmapGoogleMapApiProvider'];

})();