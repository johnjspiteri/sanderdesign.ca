(function() {
	"use strict";

	angular
		.module('app')
		.controller('FooterController', Internal);

	Internal.$inject = ['uiGmapGoogleMapApi'];

	function Internal (uiGmapGoogleMapApi) {

		var self = this;

		self.map = {
			location: {
				latitude: 43.677062,
				longitude: -79.338811
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
					latitude: 43.677062,
					longitude: -79.338811
				},
				options: {
					draggable: false
				}
			}
		};

		uiGmapGoogleMapApi.then(function() {});
	}
})();
