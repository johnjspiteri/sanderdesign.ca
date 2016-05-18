(function() {
	"use strict";

	function Index ($scope, ngMeta) {

		ngMeta.setTitle('Welcome To The Best Place For Board Games');
		ngMeta.setTag('description', 'Here is where you can edit the content on your home page.');

	}

	angular
		.module('app.index')
		.controller('Index', Index);

	Index.$inject = ['$scope', 'ngMeta'];

})();
