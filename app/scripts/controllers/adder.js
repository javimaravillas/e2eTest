'use strict';

(function(ademo) {

	ademo.controller('AdderCtrl', function($scope) {
		$scope.$root.top = 'Adder';

		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
	});

	ademo.service('users', [function(){
		return {
			data: [],
			types: [{
				label: 'cherry',
				value: 'cherry'
			},{
				label: 'apple',
				value: 'apple'
			},{
				label: 'lemon',
				value: 'lemon'
			},{
				label: 'All',
				value: '!!'
			}],
			adduser: function(u){
				this.data.push(u);
			},
			removeuser: function(i){
				this.data.splice(i,1);
			}
		};
	}]);

	ademo.directive('usertable', ['users', function(users){
		return{
			restrict: 'E',
			replace: true,
			templateUrl: 'templates/usertable.html',
			controller: ['$scope', function($scope){
				$scope.users = users.data;

				function adduser(u){
					users.adduser(u);
				}

				$scope.removeuser = function(i){
					users.removeuser(i);
				};

				$scope.$on('adduser', function(e, data){
					adduser(data);
				});

			}]
		};
	}]);

	ademo.directive('adduser', ['users', function(users){
		return{
			restrict: 'E',
			replace: true,
			templateUrl: 'templates/adduser.html',
			controller: ['$scope', function($scope){
				$scope.types = users.types;

				$scope.adduser = function(){
					//$scope.$emit('adduser', $scope.user);
					users.adduser($scope.user);
					$scope.user = {};
				};
			}]
		};
	}]);

})(angular.module('ademoApp'));