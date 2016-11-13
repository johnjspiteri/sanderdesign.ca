(function() {
	'use strict';

	function categoryFilter() {
		return function (projects, value) {
			var filtered = [];

			if(!value || value === 'Categories') {
				return projects;
			}
			angular.forEach(projects, function (project) {
				if (project.category === value ) {
					filtered.push(project);
				}
			});
			return filtered;
		};
	}

	angular
		.module('app.common')
		.filter('categoryFilter', categoryFilter);

})();