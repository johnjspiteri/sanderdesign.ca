(function() {
	"use strict";

	function internal ($rootScope, $state, $stateParams, Angularytics, MetaTags) {

		Angularytics.init();
		$rootScope.MetaTags = MetaTags;
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
		$rootScope.panel = false;
		$state.go('app.index');
	}

	angular
		.module('app')
		.run(internal);

	internal.$inject = ['$rootScope', '$state', '$stateParams', 'Angularytics', 'MetaTags'];

})();
