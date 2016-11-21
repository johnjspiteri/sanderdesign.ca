(function () {
	'use strict';

	function Header ($rootScope, $scope, $state) {

		$scope.open = function () {
			$rootScope.$emit("open", {});
		};
	}

	angular
		.module('app')
		.controller('Header', Header);

	Header.$inject = ['$rootScope', '$scope', '$state'];

})();
