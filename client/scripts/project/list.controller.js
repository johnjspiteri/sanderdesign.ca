(function() {
	"use strict";

	function List ($document, $scope, $state, listResolve, ngMeta) {

		$scope.projects = listResolve;		
		$scope.search = {
			category: 'Category',
			categories: ['Category', 'Residential', 'Commercial', 'Concept', 'Drawing'],
			style: 'Style',
			styles: ['Style', 'Zen', 'Modern']
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

	List.$inject = ['$document', '$scope', '$state', 'listResolve',  'ngMeta'];

})();
