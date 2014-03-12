'use strict';

angular.module('aboutApp', [])
.config(function ($routeProvider) {
	$routeProvider
	.when('/about', {
		templateUrl: 'views/about.html',
	});
});
