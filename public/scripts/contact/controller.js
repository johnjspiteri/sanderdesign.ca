(function() {
	"use strict";

	function Contact ($scope, contact, ngMeta) {

		ngMeta.setTitle('Contact Us');
		ngMeta.setTag('description', 'Here is where you can edit the content on the contact page.');		

		$scope.submit = function () {
			contact.create({
				name: $scope.data.name,
				email: $scope.data.email,
				message: $scope.data.message
			}).$promise.then(function(){
				$scope.data = {};
			});
		};
	}

	angular
		.module('app.contact')
		.controller('Contact', Contact);

	Contact.$inject = ['$scope', 'contact', 'ngMeta'];

})();
