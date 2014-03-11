
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

myApp.filter('arialive', function() {

	var ariaTimeout;

	return function (input, target) {

		target = target || 'assertive';

		if (ariaTimeout) {
			clearTimeout(ariaTimeout);
		}

		ariaTimeout = setTimeout(function() {
			// todo: this is a very clunky way of doing this

			// get the live element
			var live = document.getElementById(target);

			var message = document.createElement('div');

			switch (input.length) {
			case 0: message.innerHTML = 'No results'; break;
			case 1: message.innerHTML = 'One result ' + input[0].name + ' ' + input[0].address; break;
			default: message.innerHTML = '' + input.length + ' results'; break;
			}

			console.log(message);
			live.appendChild(message);
		}, 100);

		return input;
	};

});
