'use strict';

angular.module('aboutApp', ['ui.router'])
.config(function ($stateProvider) {
	$stateProvider
	.state('about',{
		url:'/about',
		templateUrl: 'views/about.html',
	});
});
