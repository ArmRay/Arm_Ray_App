(function () {
    'use strict';

    angular.module('app').controller('NavbarCtrl', function ($scope,$http,ProfileService) {
        console.log("NavbarCtrl functional!");

        //Get profile information from profile service
        //profile service stores pre-queried information into
        //a promise object and returns it into any view that then calls that
        //promise service


       	var profileInfo = {};
       	ProfileService.getProfileInfo().then(
        	function(data){
            let profileInfo = data
          });
        

        


    });
})();