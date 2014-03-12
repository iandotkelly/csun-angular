
var myApp = angular.module('myApp', []);

myApp.controller('myListController', function ($scope, $log, filterFilter) {

	$scope.announcements = [];

	$scope.$watch('myFilter', function (value) {

		var filtered = filterFilter($scope.myCollection, value);
		var message;

		switch (filtered.length) {
		case 0: message = 'No results';
			break;
		case 1: message = 'One result ' + filtered[0].name + ' ' + filtered[0].address;
			break;
		default: message = '' + filtered.length + ' results';
			break;
		}

		$scope.announcements.push({message: message});
	});

	$scope.myCollection = [
		{
			name: 'Ian',
			address: '123 Main St, Ann Arbor MI'
		},
		{
			name: 'Harry Potter',
			address: 'Hogwarts'
		},
		{
			name: 'Elizabeth',
			address: 'Buckingham Palace, London, UK'
		}
	];

});

myApp.directive('addressWidget', function ($compile) {

	return {
		scope: {
			person: '=person'
		},
		restrict: 'A',
		template: '<div class="outline">' +
			'   <div class="name">{{person.name}}</div>' +
			'   <div class="address">{{person.address}}</div>' +
			'	<div ng-show="person.name === \'Ian\'">Hello Ian</div>' +
			'</div>'
	};

});
