(function() {
	"use strict";

	function runBlock ($rootScope, $state, $stateParams, Angularytics, ngMeta) {

		Angularytics.init();
		ngMeta.init();

		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
		$rootScope.panel = false;
		$state.go('app.index');

	}

	angular
		.module('app')
		.run(runBlock);

	runBlock.$inject = ['$rootScope', '$state', '$stateParams', 'Angularytics', 'ngMeta'];

})();
