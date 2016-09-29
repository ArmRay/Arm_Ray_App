(function () {
    'use strict';

    angular
        .module('app')
        .config(['$routeProvider',
        	function ($routeProvider) {
        	$routeProvider
        		.when('/',
        		{
        			controller: 'MainController',
        			templateUrl: '/views/login.html'
        		})
        		.when('/dashboard',
        		{
        			controller: 'DashboardController',
        			templateUrl: '/views/dashboard.html'
        		})
        		.when('/profile',
        		{
        			controller: 'ProfileController',
        			templateUrl: '/views/profile.html'
        		})
        		.when('/project',
        		{
        			controller: 'ProjectController',
        			templateUrl: '/views/project.html'
        		})
        		.otherwise(
        		{
        			redirectTo: '/'
        		});
        }]);
})();