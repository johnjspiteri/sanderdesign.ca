(function() {
	"use strict";

	function List ($document, $rootScope, $scope, $state, $timeout, listResolve, ngMeta) {

		$rootScope.display = false;
		$scope.items = listResolve;
		$scope.search = {};

		ngMeta.setTitle('Board Game Library List');
		ngMeta.setTag('description', 'Here is where you can edit the content on board game list page.');

		$scope.reset = function() {
			$scope.search = {
			};
		};
	}

	angular
		.module('app.project')
		.controller('List', List);

	List.$inject = ['$document', '$rootScope', '$scope', '$state', '$timeout', 'listResolve', 'ngMeta'];

})();
