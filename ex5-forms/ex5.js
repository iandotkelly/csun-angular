
var myApp = angular.module('myApp', []);

myApp.controller('myListController', function ($scope) {

	$scope.update = function(user) {
		// do something useful with the user
		alert(JSON.stringify(user));
	};

});
