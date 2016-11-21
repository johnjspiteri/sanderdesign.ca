(function() {
	"use strict";

	function Panel ($mdSidenav, $rootScope, $scope) {

		$scope.openPanel = function() {
			$rootScope.panel = true;
			$mdSidenav('panel')
				.open()
				.then(function() {});
		};

		$scope.closePanel = function() {
			$rootScope.panel = false;
			$mdSidenav('panel')
				.close()
				.then(function() {});
		};

		$rootScope.$on("open", function(){
			$scope.openPanel();
		});
	}

	angular
		.module('app')
		.controller('Panel', Panel);

	Panel.$inject = ['$mdSidenav', '$rootScope', '$scope'];

})();