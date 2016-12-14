(function() {
	"use strict";

	function View ($document, $scope, $state, ngMeta, viewResolve) {

		$scope.project = viewResolve;

		$scope.slickConfig = {
			enabled: true,
			dots: true,
			autoplay: true,
			speed: 400,
			autoplaySpeed: 6100,
			slidesToShow: 1,
			draggable: true,
			arrows: false,
			easing: 'linear',
			accessibility: true,
			swipe: true
		};

		ngMeta.setTitle($scope.project.title);
		ngMeta.setTag('description', $scope.project.description);

	}

	angular
		.module('app.project')
		.controller('View', View);

	View.$inject = ['$document', '$scope', '$state', 'ngMeta', 'viewResolve'];

})();
