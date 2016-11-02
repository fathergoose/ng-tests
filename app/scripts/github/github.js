'use strict';
angular.module('ngTestsApp').directive('github', github)

function github(){
	return {
		template: '<h1>this is the github directive{{message}}</h1>',
		replpace: true,
		controller: githubController
	}
};

function githubController(){
	this.message = 'im a message';
}