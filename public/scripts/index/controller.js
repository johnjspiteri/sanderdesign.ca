(function() {
	"use strict";

	function Index ($scope, ngMeta) {

		ngMeta.setTitle('Experienced Landscape Architecture');
		ngMeta.setTag('description', 'Here is where you can edit the content on your home page.');

		$scope.slides = [{
			path: '/public/img/projects/residential/contemporary-court-wychwood-park/1.jpg'
		}, {
			path: '/public/img/projects/residential/formal-garden-lawrence-park/1.jpg'
		}, {
			path: '/public/img/projects/residential/modern-classic-yorkville/1.jpg'
		}, {
			path: '/public/img/projects/residential/contemporary-entry-summerhill/1.jpg'
		}];

	}

	angular
		.module('app.index')
		.controller('Index', Index);

	Index.$inject = ['$scope', 'ngMeta'];

})();
