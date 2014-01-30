'use strict';

(function(ademo) {

  ademo.controller('SwitchCtrl', ['$scope', 'users',
    function($scope, users) {
      $scope.$root.top = 'Switch';
      $scope.users = users.data;
      $scope.types = users.types;

      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  ]);

  ademo.directive('userlist', [
    function() {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/userlist.html',
        controller: [
          function() {

          }
        ]
      };
    }
  ]);

  ademo.directive('usertabs', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/usertabs.html',
      controller: ['$scope',
        function($scope) {
          $scope.tab = 'info';
        }
      ]
    };
  });

})(angular.module('ademoApp'));