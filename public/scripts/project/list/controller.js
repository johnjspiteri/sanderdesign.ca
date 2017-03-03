(function() {
	"use strict";

	function Internal ($document, $state, listResolve, localStorageService) {

		var self = this;

		self.projects = listResolve;
		self.search = {
			category: 'Categories',
			tag: 'Tags'
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

		self.categories = categoriesList(listResolve);

		self.updateTags = function() {
			self.search.tag = 'Tags';

				var tags = [],
				holder = [];
			angular.forEach(self.projects, function(item) {
				if(item.category === self.search.category) {
					tags = holder.concat(item.tags);
					console.log(tags);
				}
			});
			return tags.filter(function(elem, index, self) {
				return index === self.indexOf(elem);
			});
		};
	}

	angular
		.module('app.project')
		.controller('List', Internal);

	Internal.$inject = ['$document', '$state', 'listResolve', 'localStorageService'];

})();
