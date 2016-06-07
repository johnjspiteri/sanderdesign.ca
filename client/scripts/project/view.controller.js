(function() {
	"use strict";

	function View ($document, $scope, $state) {

		console.log("Why nont");
		// $scope.project = viewResolve;
		// console.log(viewResolve);
		console.log("Testing");

		// ngMeta.setTitle($scope.project.title);
		// ngMeta.setTag('description', 'Here is where you can edit the content on board game view page.');

	}

	angular
		.module('app.project')
		.controller('View', View);

	View.$inject = ['$document', '$scope', '$state'];

})();
