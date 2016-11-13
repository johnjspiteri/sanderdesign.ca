(function() {
	"use strict";

	function runBlock ($rootScope, $state, $stateParams, Angularytics, ngMeta) {

		// $rootScope.$on('$stateChangeError', function(event) {
		//   $state.go('app.error');
		// });

		Angularytics.init();
		ngMeta.init();

		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
		$rootScope.display = false;
		$state.go('app.index');

	}

	angular
		.module('app')
		.run(runBlock);

	runBlock.$inject = ['$rootScope', '$state', '$stateParams', 'Angularytics', 'ngMeta'];

})();
