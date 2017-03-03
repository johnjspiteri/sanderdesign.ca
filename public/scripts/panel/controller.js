(function() {
	"use strict";

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

	angular
		.module('app')
		.controller('Panel', Panel);

	Panel.$inject = ['$mdSidenav', '$rootScope'];

})();