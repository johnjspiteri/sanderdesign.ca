(function() {
	"use strict";

	function Services ($scope, ngMeta) {

		ngMeta.setTitle('Services');
		ngMeta.setTag('description', 'Here is where you can edit the content on the contact page.');

	}

	angular
		.module('app.services')
		.controller('Services', Services);

	Services.$inject = ['$scope', 'ngMeta'];

})();
