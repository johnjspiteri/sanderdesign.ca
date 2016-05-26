(function() {
	"use strict";

	function List ($document, $rootScope, $scope, $state, listResolve, ngMeta) {

		$rootScope.display = false;
		$scope.listings = listResolve;
		console.log($scope.listings);

		$scope.search = {
			category: 'Residential',
			categories: ['Residential', 'Commercial', 'Concept', 'Drawing'],
			style: '',
			styles: ['Testing', 'This']
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

		ngMeta.setTitle('Board Game Library List');
		ngMeta.setTag('description', 'Here is where you can edit the content on board game list page.');

		$scope.reset = function() {
			$scope.search = {
				category: 'Residential',
				filter: '',
				style: '',
			};
		};
	}

	angular
		.module('app.project')
		.controller('List', List);

	List.$inject = ['$document', '$rootScope', '$scope', '$state', 'listResolve',  'ngMeta'];

})();
