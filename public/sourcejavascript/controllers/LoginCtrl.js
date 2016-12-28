(function () {
    'use strict';

    angular.module('app').controller('LoginCtrl', ['$scope','LoginFactory' ,function ($scope,LoginFactory) {
        console.log("LoginCtrl functional!");

        $scope.username = '';
        $scope.password = '';

        $scope.login = function(){
        	var user = {
        		username:$scope.username,
        		password:$scope.password
        	}
        	
        	console.log(user.username,user.password);
        	//login service sends the user object with username and password
        	// it expects a full user object back, and injects it into the next view
        	LoginFactory.save(user,function(data){
            console.log("data successfully saved")
            console.log(data);
            if(data.user._id){
                console.log('user id is not blank');
                // $state.go('admin',{data:user});
                $state.go('dashboard',{data:data.user});
              }
            },
            function(){
            	//There can be a toast popup here
				console.log('there was an error');     
            }
          )
        }

        
    }]);
})();



