
var myApp = angular.module('myApp', []);

myApp.controller('myListCtrl', function ($scope) {

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
