'use strict';

angular.module('ademoApp', [
  'ngRoute',
  'ngAnimate'
])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/e2e', {
          templateUrl: 'views/e2e.html',
          controller: 'E2eCtrl'
        })
        .when('/adder', {
          templateUrl: 'views/adder.html',
          controller: 'AdderCtrl'
        })
        .when('/filter', {
          templateUrl: 'views/filter.html',
          controller: 'FilterCtrl'
        })
        .when('/switch', {
          templateUrl: 'views/switch.html',
          controller: 'SwitchCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    }
  ]).run(['$rootScope', '$route', 'users', '$http',
    function($rootScope, $route, users, $http) {
      $rootScope.children = [];
      $rootScope.menuitems = [];

      $http.get('users.json').then(function(response) {
        users.data = response.data;
      });

      for (var x in $route.routes) {
        if ($route.routes[x].hasOwnProperty('controller')) {
          $rootScope.menuitems.push({
            name: $route.routes[x].controller.replace('Ctrl', ''),
            href: '#' + $route.routes[x].originalPath
          });
        }
      }
    }
  ]);