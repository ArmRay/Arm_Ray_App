(function () {
    'use strict';

    angular.module('app').controller('NavbarCtrl', function ($scope,$http) {
        console.log("NavbarCtrl functional!");

       
        //get profile image from profile information

	        /* $http.get('/profile/:id', function(data){
	        $scope.avatar = '';

	        //http placeholder for avatar img request

	       	//data.avatar contains img url

	        	$scope.avatar = data.avatar;

	        })*/


    });
})();