
(function () {
    'use strict';

    angular.module('app').directive('navbar', function() {
        console.log("navBar directive!");

        	return{
        		restrict: 'E',
        		templateUrl: '/views/NavbarTemplate.html',
        		controller: 'NavbarCtrl'
        	}


    });	
})();