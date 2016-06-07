(function() {
	"use strict";

	function Footer ($scope, uiGmapGoogleMapApi) {

		console.log("Footer");
		$scope.map = {
			center: {
				latitude: 43.648125,
				longitude: -79.394845
			},
			zoom: 14
		};
		$scope.options = {
			disableDefaultUI: false,
			draggable: false,
			mapTypeControl: false,
			maxZoom: 14,
			minZoom: 14,
			scrollwheel: false,
			streetViewControl: false,
			zoomControl: false,
		};
		$scope.marker = {
			id: 1,
			coords: {
				latitude: 43.648125,
				longitude: -79.394845,
			},
			options: {
				draggable: false,
				icon: '/img/car-icon.png',
			}
		};

		uiGmapGoogleMapApi.then(function(maps) {});


	}

	angular
		.module('app')
		.controller('Footer', Footer);

	Footer.$inject = ['$scope', 'uiGmapGoogleMapApi'];

})();
