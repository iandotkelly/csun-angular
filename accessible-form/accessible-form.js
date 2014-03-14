
var myApp = angular.module('myApp', []);

myApp.controller('myFormCtrl', function ($scope) {

	// convenience list of input ng-model controllers
	$scope.inputs = [];

	// method to run on submit
	$scope.submit = function(user) {

		var index = 0;
		for (index = 0; index < $scope.inputs.length; index++) {
			var input = $scope.inputs[index];
			if (input.failsValidation()) {
				input.setFocus();
				return;
			}
		}

		alert(JSON.stringify(user));
	};
});

/**
 * Directive to create a richer validaton binding between
 * an input and its model
 */
myApp.directive('input', function ($timeout, $log) {
	return {
		restrict: 'E',
		require: ['ngModel'],
		link: function (scope, element, attrs, ctrl) {

			// add a set focus method to the model's controller
			var input = ctrl[0];
			input.setFocus = function () {
				$timeout(function () {
					element[0].focus();
				});
			};

			// add the controller to the array of inputs on the scope
			// to allow easy iteration over all of them
			scope.inputs.push(input);

			/**
			 * Whether the control fails validation
			 * @return {Boolean} True = fails validation
			 */
			input.failsValidation = function () {
				return !!input.hasVisited && !!input.$invalid;
			};

			// on blur apply the had visited property
			element.on('blur', function () {
				element.addClass('has-visited');

				scope.$apply(function () {
					input.hasVisited = true;
				});
			});

			// if the form submits - assume we've visted all the fields
			element.closest('form').on('submit', function () {
				element.addClass('has-visited');

				scope.$apply(function () {
					input.hasVisited = true;
				});
			});
		}
	};
});
