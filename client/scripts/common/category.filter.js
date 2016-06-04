(function() {
	'use strict';

	function categoryFilter() {
		return function (listings, value) {
			var filtered = [];

			if(!value || value === 'CATEGORY') {
				return listings;
			}
			angular.forEach(listings, function (listing) {
				if (listing.category === value ) {
					filtered.push(listing);
				}
			});
			return filtered;
		};
	}

	angular
		.module('app.common')
		.filter('categoryFilter', categoryFilter);

})();