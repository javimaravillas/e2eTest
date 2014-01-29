'use strict';

angular.module('ademoApp', [
  'ngRoute'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/e2e', {
        templateUrl: 'views/e2e.html',
        controller: 'E2eCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]).run(function($rootScope){
    $rootScope.children = [];
  });
