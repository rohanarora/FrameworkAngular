'use strict';

angular.module('rohanApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	//'ngRoute',
	'mainApp',
	'aboutApp',
	'contactApp',
	'ui.router'
])

.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider
	.otherwise('/');
});
