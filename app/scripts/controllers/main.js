'use strict';

angular.module('ademoApp')
	.controller('MainCtrl', ['$scope',
		function($scope) {
			$scope.$root.top = 'Main';

			$scope.awesomeThings = [
				'HTML5 Boilerplate',
				'AngularJS',
				'Karma'
			];
		}
	]);