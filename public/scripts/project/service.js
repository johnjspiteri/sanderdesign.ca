(function() {
	"use strict";

	function project ($resource) {
		return $resource("/api/project/:id", { id: "@_id" },
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
		.factory('project', project);

	project.$inject = ['$resource'];

})();
