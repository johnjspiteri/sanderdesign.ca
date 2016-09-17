(function() {
	"use strict";

	function config ($locationProvider, $urlRouterProvider, $uiViewScrollProvider, $sceDelegateProvider, AngularyticsProvider, cfpLoadingBarProvider, ngMetaProvider, uiGmapGoogleMapApiProvider) {

		uiGmapGoogleMapApiProvider.configure({
			//    key: 'your api key',
			v: '3.17',
			libraries: 'weather,geometry,visualization'
		});

		AngularyticsProvider.setEventHandlers(['Console', 'GoogleUniversal']);

		$locationProvider.html5Mode(true);

		ngMetaProvider.useTitleSuffix(true);
		ngMetaProvider.setDefaultTitleSuffix(' | Sander Design');
		ngMetaProvider.setDefaultTag('author', 'Sander Freedman');

		// $urlRouterProvider.otherwise('/404');
		// $urlRouterProvider.rule(function ($injector, $location) {
		// 	var path = $location.url();
		// 	if (path[path.length - 1] === '/' || path.indexOf('/?') > -1) {
		// 		return;
		// 	}
		// 	if (path.indexOf('?') > -1) {
		// 		return path.replace('?', '/?');
		// 	}
		// 	return path + '/';
		// });

		cfpLoadingBarProvider.spinnerTemplate = '<div class=\'loadbar\'><div class=\'loadbar__icon\'></div></div>';
		cfpLoadingBarProvider.latencyThreshold = 50;
		cfpLoadingBarProvider.includeSpinner = true;
		cfpLoadingBarProvider.includeBar = false;

	}

	angular
		.module('app')
		.config(config);

	config.$inject = ['$locationProvider', '$urlRouterProvider', '$uiViewScrollProvider', '$sceDelegateProvider', 'AngularyticsProvider', 'cfpLoadingBarProvider', 'ngMetaProvider', 'uiGmapGoogleMapApiProvider'];

})();