(function () {
    'use strict';

    angular.module('app').controller('LandingCtrl', ['$scope','toastr','$http', function ($scope,toastr,$http) {
        console.log("LandingCtrl functional!");


        $scope.checkemail= function(x){
                let checkemail= x;
                let checkurl = '/api/checkusername/'+checkemail;
                console.log(checkemail);
                console.log(checkurl);
                $http.post(checkurl).then(function(res){
                        if(res.data.exists){
                            toastr.danger('Email has already been registered','Issue!');
                        }
                    },function(){
                    console.log('there was a checkusername get error');
                })
        }
        

        $scope.submitForm = function(email,firstname,lastname){
        	console.log('this has been clicked');
        	if(typeof email != 'undefined' && typeof firstname != 'undefined' && typeof lastname != 'undefined'){
        		var user = {
        			firstname: firstname,
        			lastname: lastname,
        			email:email
        		}
        		console.log('Win!')
        		$http.post('/api/register',user).then(function(data){
 				if(data.message= 'Success'){
 					console.log('this user was saved succesfully');
 					$scope.firstnameTop = '';
 					$scope.lastnameTop = '';
 					$scope.emailTop = '';
 					$scope.firstnameBottom = '';
 					$scope.lastnameBottom = '';
 					$scope.emailTop = '';
 				}
 				else{
 					console.log('this user was not saved!');
 				}

 				if(data.error){
 					toastr.danger('Something went wrong, try again later :(','Whoops!');
 				}
 				

        	})

        	console.log('user',user)
        		
        	}
        	else if(typeof email == 'undefined'){
        		console.log('email was undefined');
        		toastr.warning('Your Email was not valid','Invalid!')
        	}
        	else{
        		console.log('something else was undefined')
        		toastr.warning('You must submit a first and last name','Invalid!')
        	}

        	

        }




    }]);
})();