(function () {
    'use strict';

    angular.module('app').controller('LandingCtrl', ['$scope','toastr','$http', function ($scope,toastr,$http) {
        console.log("LandingCtrl functional!");

        function dangertrigger(){
            toastr.warning('Email has already been registered','Issue!');
        }
        var doesemailexist =true;

        function checkit(x){
            var check= x;
                var checkurl = '/api/checkusername/'+check;
                console.log(check);
                console.log(checkurl);
                $http.post(checkurl).then(function(res){
                        if(res.data.exists){
                            console.log('exists exists');
                            dangertrigger();
                            doesemailexist = false;
                        }else{
                            doesemailexist = true;
                        }
                    },function(){   
                    console.log('there was a checkusername get error');
                })
        }

        $scope.checkemail= function(x){
            checkit(x);
        };
        

        $scope.submitForm = function(email,firstname,lastname){
        	console.log('this has been clicked');
        	if(typeof email != 'undefined' && doesemailexist && typeof firstname != 'undefined' && typeof lastname != 'undefined'){
        		var user = {
        			firstname: firstname,
        			lastname: lastname,
        			email:email
        		}
        		console.log('Win!')

        		$http.post('/api/register',user).then(function(data){
 				if(data.message= 'Success'){
 					console.log('this user was saved succesfully');
                    toastr.success('Thank you for registering!');
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