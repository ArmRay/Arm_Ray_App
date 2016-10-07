(function () {
    'use strict';

    angular.module('app').controller('NavbarCtrl', function ($scope) {
        console.log("NavbarCtrl functional!");

       
        //get profile image from profile information

	        $scope.avatar = '';

	        //http placeholder for avatar img request

	        $http.get('/profile/:id', function(data){
	        	//data.avatar contains img url
	        	
	        	$scope.avatar = data.avatar;

	        })


    });
})();