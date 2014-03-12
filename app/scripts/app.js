'use strict';

angular.module('rohanApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'mainApp',
	'aboutApp',
	'contactApp',
	'ui.router',
])

.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
	$locationProvider.html5Mode(true).hashPrefix('!');
	$urlRouterProvider
	.otherwise('/');
});
