(function () {
	"use strict";

	angular
		.module('app.contact')
		.factory('contact', contact);

	contact.$inject = ['$resource'];

	function contact ($resource) {
		return $resource("/api/contact/:id", { id: "@_id" }, {
			'create': {
				method: 'POST'
			}
		});
	}
})();
