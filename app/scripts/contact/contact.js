'use strict';

angular.module('contactApp', [])
.config(function ($routeProvider) {
	$routeProvider
	.when('/contact', {
		templateUrl: 'views/contact.html',
	});
});
