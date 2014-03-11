'use strict';

angular.module('mainApp', []);
angular.module('aboutApp', []);
angular.module('contactApp', []);

angular.module('rohanApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
	'mainApp',
	'aboutApp',
	'contactApp',
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
