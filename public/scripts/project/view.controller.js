(function() {
	"use strict";

	function View ($document, $scope, $state, ngMeta, viewResolve) {

		$scope.project = viewResolve;

		ngMeta.setTitle($scope.project.title);
		ngMeta.setTag('description', $scope.project.description);

	}

	angular
		.module('app.project')
		.controller('View', View);

	View.$inject = ['$document', '$scope', '$state', 'ngMeta', 'viewResolve'];

})();
