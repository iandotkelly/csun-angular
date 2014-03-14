
var myApp = angular.module('myApp', []);

myApp.controller('myListController', function ($scope) {

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

myApp.directive('addressWidget', function () {

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
