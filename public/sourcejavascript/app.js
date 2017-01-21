'use strict';

(function () {
	//Declare module dependencies.
	angular.module('app', [
		'ui.router',
		'ngAria',
		'ngAnimate',
		'ngResource',
		'angularSpinner',
		'toastr'
	]).config(['toastrConfig',function(toastrConfig){

		angular.extend(toastrConfig, {
		    autoDismiss: true,
		    containerId: 'toast-container',
		    maxOpened: 1,    
		    newestOnTop: true,
		    positionClass: 'toast-top-center',
		    preventDuplicates: false,
		    preventOpenDuplicates: false,
		    target: 'body'
	  	});
	}]);
 
	
})();