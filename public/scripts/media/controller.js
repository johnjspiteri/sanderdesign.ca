(function() {
	"use strict";

	function Media ($scope, ngMeta) {

		ngMeta.setTitle('Media Us');
		ngMeta.setTag('description', 'Here is where you can edit the content on the contact page.');

	}

	angular
		.module('app.media')
		.controller('Media', Media);

	Media.$inject = ['$scope', 'ngMeta'];

})();
