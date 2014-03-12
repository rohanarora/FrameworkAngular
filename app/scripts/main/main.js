'use strict';

angular.module('mainApp', ['ui.router'])
.config(function ($stateProvider) {
	$stateProvider
	.state('main',{
		url:'/',
		templateUrl: 'views/main.html',
	});
});
