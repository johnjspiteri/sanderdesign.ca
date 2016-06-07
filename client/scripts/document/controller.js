(function() {
	'use strict';

	function Document ($document, $scope, $rootScope, $mdSidenav) {

		$rootScope.display = false;

		console.log('Test');

		$scope.open = function () {
			$rootScope.display = true;
			$mdSidenav('navigation').open();
		};
		$scope.close = function () {
			$rootScope.display = false;
			$mdSidenav('navigation').close();
		};
	}

	angular
		.module('app')
		.controller('Document', Document);

	Document.$inject = ['$document', '$scope', '$rootScope', '$mdSidenav'];

})();