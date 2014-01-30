'use strict';

(function(ademo) {


  ademo.controller('FilterCtrl', ['$scope', 'users',
    function($scope, users) {
      $scope.$root.top = 'Filter';
      $scope.types = users.types;

      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  ]);

  ademo.directive('userfilter', [
    function() {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/userfilter.html',
        controller: ['$scope',
          function($scope) {
            $scope.userfilter = {
              type: '!!'
            };
          }
        ]
      };
    }
  ]);

})(angular.module('ademoApp'));