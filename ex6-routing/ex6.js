
var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('myRoutingCtrl', function ($scope, $log) {
	$log.log('Routing');
});

myApp.controller('view1Ctrl', function ($scope, $location) {
	$scope.switchToView2 = function () {
		$location.path('view2');
	};
});

myApp.controller('view2Ctrl', function ($scope, $location) {
});

myApp.config(function ($routeProvider) {

	$routeProvider
	.when('/view1', {
		templateUrl: 'view1.html',
		controller: 'view1Ctrl'
	})
	.when('/view2', {
		templateUrl: 'view2.html',
		controller: 'view2Ctrl'
	})
	.otherwise({
		redirectTo: '/view1'
	});

});
