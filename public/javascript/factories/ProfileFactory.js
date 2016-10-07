
(function () {
    'use strict';

    angular.module('app').factory('ProfileService', ['$http','$q', function($http, $q) {
    var profile = {};
    var requestfailed = true;
    var promise = undefined;
    return {
        getProfileInfo: function() {
            if(!promise || requestfailed) {
                promise = $http.get('/some/url/for/profile/data').then(
                function(response) {
                    requestfailed = false;
                    profile = response.data;
                    return profile;
                },function(response) {  // error
                    requestfailed = true;
                    return $q.reject(response);
                });
            }
            return promise;
        },
    };
}])	
})();