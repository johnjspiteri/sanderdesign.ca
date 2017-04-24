(function() {
	"use strict";

	function Internal(NgMap) {

		var self = this;

		self.map = {
			location: [43.677062, -79.338811],
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
					latitude: 43.677062,
					longitude: -79.338811
				},
				options: {
					draggable: false
				}
			}
		};

		NgMap.getMap().then(function(map) {
			// console.log(map.getCenter());
			// console.log('markers', map.markers);
			// console.log('shapes', map.shapes);
		});
	}

	angular
		.module('app')
		.controller('FooterController', Internal);

	Internal.$inject = ['NgMap'];

})();
