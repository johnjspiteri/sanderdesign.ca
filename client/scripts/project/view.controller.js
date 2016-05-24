(function() {
	"use strict";

	function View ($document, $scope, $state, viewResolve, ngMeta) {

		$scope.item = viewResolve;

		ngMeta.setTitle($scope.item.detail.title);
		ngMeta.setTag('description', 'Here is where you can edit the content on board game view page.');

	}

	angular
		.module('app.project')
		.controller('View', View);

	View.$inject = ['$document', '$scope', '$state', 'viewResolve', 'ngMeta'];

})();
