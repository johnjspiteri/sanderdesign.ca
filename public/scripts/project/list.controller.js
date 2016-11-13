(function() {
	"use strict";

	function List ($document, $scope, $state, listResolve, ngMeta) {

		$scope.projects = listResolve;
		$scope.search = {
			category: 'Categories',
			tag: 'Tags',
		};

		function categoriesList(items) {
			var categories = [];
			angular.forEach(items, function(item) {
				categories.push(item.category);
			});
			return categories.filter(function(elem, index, self) {
				return index === self.indexOf(elem);
			}).sort();
		}
		function tagList() {
			var tags = [],
			  holder = [];
			angular.forEach($scope.projects, function(item) {
				if(item.category === $scope.search.category) {
					tags = holder.concat(item.tags);
					console.log(tags);
				}
			});
			return tags.filter(function(elem, index, self) {
				return index === self.indexOf(elem);
			});
		}
		$scope.categories = categoriesList(listResolve);

		$scope.updateTags = function(data) {
			$scope.search.tag = 'Tags';
			$scope.tags = tagList(data);
		};

		ngMeta.setTitle('Project Listing');
		ngMeta.setTag('description', 'A current list of Sander Design projects, concepts and proposals.');
	}

	angular
		.module('app.project')
		.controller('List', List);

	List.$inject = ['$document', '$scope', '$state', 'listResolve',  'ngMeta'];

})();
