(function() {
	"use strict";

	function Footer ($scope, uiGmapGoogleMapApi) {

		$scope.map = {
			location: {
				latitude: 43.648125,
				longitude: -79.394845
			},
			zoom: 15,
			options: {
				disableDefaultUI: false,
				draggable: false,
				mapTypeControl: false,
				maxZoom: 15,
				minZoom: 15,
				scrollwheel: false,
				streetViewControl: false,
				zoomControl: false
			},
			marker: {
				id: 1,
				coords: {
					latitude: 43.648125,
					longitude: -79.394845
				},
				options: {
					draggable: false
				}
			}
		};

		uiGmapGoogleMapApi.then(function(maps) {});


	}

	angular
		.module('app')
		.controller('Footer', Footer);

	Footer.$inject = ['$scope', 'uiGmapGoogleMapApi'];

})();