(function() {
	"use strict";

	angular
		.module('app.project')
		.controller('ViewController', Internal);

	Internal.$inject = ['viewResolve'];

	function Internal (viewResolve) {

		var self = this;

		self.project = viewResolve;

		self.slickConfig = {
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
	}
})();
