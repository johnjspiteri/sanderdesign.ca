(function() {
	"use strict";

	angular
		.module('app')
		.controller('PanelController', Panel);

	Panel.$inject = ['$mdSidenav', '$rootScope'];

	function Panel ($mdSidenav, $rootScope) {

		var self = this;

		self.close = function() {
			self.backdrop = false;
			$mdSidenav('panel')
				.close()
				.then(function() {});
		};

		$rootScope.$on("open", function(){
			self.backdrop = true;
			$mdSidenav('panel')
				.open()
				.then(function() {});
		});
	}
})();