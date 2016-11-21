(function() {
	"use strict";

	function Contact ($scope, ngMeta) {

		ngMeta.setTitle('Contact');
		ngMeta.setTag('description', '');

	}

	angular
		.module('app.contact')
		.controller('Contact', Contact);

	Contact.$inject = ['$scope', 'ngMeta'];

})();
