'use strict';

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
	.otherwise({
		redirectTo: '/'
	});
});
