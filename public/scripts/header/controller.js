(function () {
	'use strict';

	function Internal ($rootScope) {

		var self = this;
		self.open = function () {
			$rootScope.$emit("open", {});
		};
	}

	angular
		.module('app')
		.controller('Header', Internal);

	Internal.$inject = ['$rootScope'];

})();
