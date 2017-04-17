(function() {
	'use strict';

	angular
		.module('app.common')
		.filter('categoryFilter', internal);

	function internal() {
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
})();