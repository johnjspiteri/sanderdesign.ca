(function() {
	"use strict";

	function runBlock ($rootScope, $state, $stateParams, ngMeta) {
		// $rootScope.$on('$stateChangeError', function(event) {
		//   $state.go('app.error');
		// });
		$rootScope.$on('$stateChangeError', function(event) {
		  $state.go('app.error');
		});

		console.log("Run");

		// Angularytics.init();

		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
		$rootScope.display = false;
		$state.go('app.index');

		ngMeta.init();
	}

	angular
		.module('app')
		.run(runBlock);

	runBlock.$inject = ['$rootScope', '$state', '$stateParams', 'ngMeta'];

})();
