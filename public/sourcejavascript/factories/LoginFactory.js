(function () {
    'use strict';

    angular.module('app').factory('LoginFactory', ['$http','$resource', function($http, $resource) {
        console.log('login resource');
        return $resource('some/url/here');
}])	
})();