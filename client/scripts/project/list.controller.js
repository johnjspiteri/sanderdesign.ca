(function() {
	"use strict";

	function List ($document, $rootScope, $scope, $state, listResolve, ngMeta) {

		$rootScope.display = false;
		$scope.projects = listResolve;

		$scope.search = {
			category: '',
			categories: ['', 'Residential', 'Commercial', 'Concept', 'Drawing'],
			style: '',
			styles: ['', 'Zen', 'Modern']
		};

		// function modelList(inventory, manufacturer) {
		// 	var models = [];
		// 	angular.forEach(inventory, function(item) {
		// 		if(item.content.make === manufacturer) {
		// 			models.push(item.content.model);
		// 		}
		// 	});
		// 	return models.filter(function(elem, index, self) {
		// 		return index === self.indexOf(elem);
		// 	});
		// }

		ngMeta.setTitle('Project Listing');
		ngMeta.setTag('description', 'Here is where you can edit the content on board game list page.');

		$scope.reset = function() {
			$scope.search = {
				category: '',
				categories: ['Residential', 'Commercial', 'Concept', 'Drawing'],
				filter: '',
				style: '',
				styles: ['Zen', 'Modern']
			};
		};
	}

	angular
		.module('app.project')
		.controller('List', List);

	List.$inject = ['$document', '$rootScope', '$scope', '$state', 'listResolve',  'ngMeta'];

})();
