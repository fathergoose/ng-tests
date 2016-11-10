'use strict';
angular.module('ngTestsApp').directive('github', github)
// .controller('githubController', githubController);

function github() {
	return {
		template: '<h1>this is the github directive{{message}}</h1>',
		controller: githubController
	}
}

function githubController($scope) {
	$scope.message = 'im a message';
}
