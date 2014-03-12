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

.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider
	.otherwise('/');
});
