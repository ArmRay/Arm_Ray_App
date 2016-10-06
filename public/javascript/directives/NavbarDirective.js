
(function () {
    'use strict';

    angular.module('app').directive('navBar', function ($scope) {
        console.log("navBar directive!");

        	return{
        		restrict: 'E',
        		templateUrl: '',
        		controller:'NavbarCtrl'
        	}


    });	
})();