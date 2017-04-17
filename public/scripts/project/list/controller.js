(function() {
	"use strict";

	angular
		.module('app.project')
		.controller('ListController', Internal);

	Internal.$inject = ['listResolve', 'localStorageService'];

	function Internal (listResolve, localStorageService) {

		var self = this;

		self.projects = listResolve;
		self.search = {
			category: '',
			categories: [],
			tag: '',
			tags: []
		};

		// Initialize local storage if any
		self.search.category = localStorageService.get('category') || '';
		self.search.tag = localStorageService.get('tag') || '';

		// Build categories once
		var output = [];
		var i = 0;
		var length = self.projects.length;

		for(i; i<length; i++) {
			output.push(self.projects[i].category);
		}

		// Filter out duplicates
		self.search.categories = output.filter(function(elem, index, self) {
			return index === self.indexOf(elem);
		});

		// Add empty first value
		self.search.categories.sort().unshift('');

		// Build tags on demand
		self.buildTags = function() {
			self.search.tags = [];
			var holder = [];
			var output = [];
			var i = 0;
			var length = self.projects.length;

			for(i; i<length; i++) {
				if(self.projects[i].category === self.search.category) {
					holder = output;
					output = holder.concat(self.projects[i].tags);
				}
			}

			// Filter out duplicates
			self.search.tags = output.filter(function(elem, index, self) {
				return index === self.indexOf(elem);
			});

			// Add empty first value
			self.search.tags.sort().unshift('');
			localStorageService.set('category', self.search.category);
			localStorageService.set('tag', self.search.tag);
		};
		self.buildTags();

		self.changeTags = function() {
			localStorageService.set('tag', self.search.tag);
		};
	}
})();
