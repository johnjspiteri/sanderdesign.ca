(function () {
	'use strict';

	angular
		.module('app')
		.controller('HeaderController', Internal);

	Internal.$inject = ['$rootScope'];

	function Internal ($rootScope) {

		var self = this;

		self.open = function () {
			$rootScope.$emit("open", {});
		};
	}
})();
