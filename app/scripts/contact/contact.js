'use strict';

angular.module('contactApp', ['ui.router', 'google-maps'])
.config(function ($stateProvider) {
	$stateProvider
	.state('contact',{
		url:'/contact',
		templateUrl: 'views/contact.html',
	});
});
