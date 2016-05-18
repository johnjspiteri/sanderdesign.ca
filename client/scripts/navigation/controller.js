(function() {
	"use strict";

	function Navigation ($document, $mdSidenav, $rootScope, $scope, $state) {

		$rootScope.display = false;

		$scope.openPanel = function () {
			$rootScope.display = true;
			$mdSidenav('panel').open();
		};
		$scope.closePanel = function () {
			$rootScope.display = false;
			$mdSidenav('panel').close();
		};
	}

	angular
		.module('app')
		.controller('Navigation', Navigation);

	Navigation.$inject = ['$document', '$mdSidenav', '$rootScope', '$scope', '$state'];

})();