(function() {
	"use strict";

	angular
		.module('app')
		.run(internal);

	internal.$inject = ['Angularytics', 'runFactory'];

	function internal (Angularytics, runFactory) {

		Angularytics.init();
		runFactory.init();
	}
})();
