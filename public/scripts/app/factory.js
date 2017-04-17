(function () {
	"use strict";

	angular
		.module('app')
		.factory('runFactory', internal);

	internal.$inject = ['$rootScope', '$state', '$stateParams', 'Angularytics', 'MetaTags'];

	function internal ($rootScope, $state, $stateParams, MetaTags) {

		var factory = {};

		factory.init = function() {
			$rootScope.MetaTags = MetaTags;
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
			$rootScope.panel = false;
			$state.go('app.index');
		};

		return factory;
	}
})();
