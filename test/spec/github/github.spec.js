'use strict';

describe('Directive: Github directive', function() {
	var $compile,
		$scope,
		directiveElement,
		githubCtrl;

	beforeEach(function() {
		module('ngTestsApp');

		inject(function(_$compile_, _$rootScope_) {
			$compile = _$compile_;
			$scope = _$rootScope_.$new();
		});

		directiveElement = getCompiledElement();
		githubCtrl = directiveElement.controller;
	})

	function getCompiledElement() {
		var element = angular.element('<github></github>');
		var compiledElement = $compile(element)($scope);
		$scope.$digest();
		return compiledElement;
	}


	// Test the the 'message'
	it('has a heading', function () {
		var hOne = directiveElement.find('h1');
		console.log(hOne);
		expect(hOne).toBeDefined();
	});

	//See if we can see the controller
	describe('Controller: Github directive', function() {
		it('has a message', function() {
			expect($scope.message).toEqual('im a message');
		});
	});
});