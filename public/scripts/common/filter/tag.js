(function() {
	'use strict';

	function tagFilter() {
		return function (projects, value) {
			var filtered = [];

			if(!value || value === 'Tags') {
				return projects;
			}
			angular.forEach(projects, function (project) {
				for(var i=0; i <= project.tags.length; i++) {
					if (project.tags[i] === value ) {
						filtered.push(project);
					}
				}
			});
			return filtered;
		};
	}

	angular
		.module('app.common')
		.filter('tagFilter', tagFilter);

})();