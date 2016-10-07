
(function () {
    'use strict';

    angular
        .module('app')
        .config(function ($stateProvider, $urlRouterProvider,$locationProvider) {
            console.log("inside router");
            $urlRouterProvider.otherwise("/");
            
            $locationProvider.html5Mode({
                 enabled: true,
                 requireBase: false
            });
            
            $stateProvider
              .state('login', {
                  url: "/login",
                  templateUrl: "/views/login.html",
                  controller:"LoginCtrl"   
              }, function(){
                console.log("Inside of login route");
              })

              .state('dashboard', {
                  url: "/dashboard",
                  templateUrl: "/views/dashboard.html",
                  controller:"DashboardCtrl"   
              })
              .state('project', {
                  url: "/project",
                  templateUrl: "/views/project.html",
                  controller:"ProjectCtrl"   
              })
              .state('profile', {
                  url: "/profile",
                  templateUrl: "/views/profile.html",
                  controller:"ProfileCtrl"   
              })


        });
})();