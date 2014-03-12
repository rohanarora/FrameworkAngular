'use strict';

angular.module('contactApp')
.controller('MapCtrl', function ($scope) {
	$scope.map = {
		center: {
			latitude: 45,
			longitude: -73
		},
		zoom: 8
	};

	$scope.messageMap =
		{'content': 'Map'};
});
