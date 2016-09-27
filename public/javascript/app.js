'use strict';

(function () {
       'use strict';

       //Declare module dependencies.

       angular.module('app', ['ngRoute']).config(function ($routeProvider) {
              $routeProvider.when('/', {
                     controller: 'MainController',
                     templateUrl: '/public/views/login.html'
              }).when('/dashboard', {
                     controller: 'DashboardController',
                     templateUrl: '/public/views/dashboard.html'
              }).when('/profile', {
                     controller: 'ProfileController',
                     templateUrl: '/public/views/profile.html'
              }).when('/project', {
                     controller: 'ProjectController',
                     templateUrl: '/public/views/project.html'
              }).otherwise({ redirectTo: '/' });
       });
})();