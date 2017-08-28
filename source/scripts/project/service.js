(function() { "use strict";

	function internal ($resource) {
		return $resource("/api/project/:clean", { clean: "@clean" },
			{
				'create':  { method: 'POST' },
				'query':   { method: 'GET', isArray: true },
				'show':    { method: 'GET', isArray: false },
				'update':  { method: 'PUT' },
				'pull':    { method: 'PATCH' },
				'destroy': { method: 'DELETE' }
			}
		);
	}

	angular
		.module('app.project')
		.factory('project', internal);

	internal.$inject = ['$resource'];

})();