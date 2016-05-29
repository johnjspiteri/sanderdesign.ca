(function() {
	"use strict";

	function About ($scope, ngMeta) {

		ngMeta.setTitle('About Us');
		ngMeta.setTag('description', 'Here is where you can edit the content on the contact page.');

	}

	angular
		.module('app.about')
		.controller('About', About);

	About.$inject = ['$scope', 'ngMeta'];

})();
