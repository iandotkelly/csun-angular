
var myApp = angular.module('myApp', []);

/**
 * The controller for the search list application
 *
 * @param  {Object}		$scope       The angular scope object
 * @param  {Function}	filterFilter The basic filter used for the search box
 */
myApp.controller('myListController', function ($scope, filterFilter) {

	// holds the array of announcements to be injected into
	// the aria-live region
	$scope.announcements = [];

	// a watch on the myFilter property of the scope - to push
	// a message to the announcements when the search input
	// is modified
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

	// some example data
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

// a directive for the address widget
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
