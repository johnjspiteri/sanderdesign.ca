(function() {
	"use strict";

	function portfolio ($resource) {
		return $resource("/api/portfolio/:id", { id: "@_id" },
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
		.module('app.portfolio')
		.factory('portfolio', portfolio);

	portfolio.$inject = ['$resource'];

})();
