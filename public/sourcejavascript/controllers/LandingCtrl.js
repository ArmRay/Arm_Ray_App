(function () {
    'use strict';

    angular.module('app').controller('LandingCtrl', ['$scope','toastr','$http', function ($scope,toastr,$http) {
        console.log('Are you looking at my console logs? For shame ;)');
        function dangertrigger(){
            toastr.warning('Email has already been registered','Issue!');
        }
        var doesemailexist =true;

        function checkit(x){
            var check= x;
                var checkurl = '/api/checkusername/'+check;
                
                $http.post(checkurl).then(function(res){
                        if(res.data.exists){
                            console.log('exists exists');
                            dangertrigger();
                            doesemailexist = false;
                        }else{
                            doesemailexist = true;
                        }
                    },function(){   

                })
        }

        $scope.checkemail= function(x){
            checkit(x);
        };
        

        $scope.submitForm = function(email,firstname,lastname){

        	if(typeof email != 'undefined' && doesemailexist && typeof firstname != 'undefined' && typeof lastname != 'undefined'){
        		var user = {
        			firstname: firstname,
        			lastname: lastname,
        			email:email
        		}


        		$http.post('/api/register',user).then(function(data){
 				if(data.message= 'Success'){

                    toastr.success('Thank you for registering!');
 					$scope.firstnameTop = '';
 					$scope.lastnameTop = '';
 					$scope.emailTop = '';
 					$scope.firstnameBottom = '';
 					$scope.lastnameBottom = '';
 					$scope.emailTop = '';
 				}
 				else{

 				}

 				if(data.error){
 					toastr.danger('Something went wrong, try again later :(','Whoops!');
 				}
 				

        	})


        		
        	}
        	else if(typeof email == 'undefined'){

        		toastr.warning('Your Email was not valid','Invalid!')
        	}
        	else{

        		toastr.warning('You must submit a first and last name','Invalid!')
        	}

        	

        }




    }]);
})();