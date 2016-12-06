
(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider,$locationProvider) {
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
              .state('index', {
                  url: "/",
                  templateUrl: "/views/landing.html",
                  controller:"LandingCtrl"   
              }, function(){
                console.log("Inside of landing page");
              })
              .state('app',{
                  url:"/app",
                  templateUrl:"/views/app.html",
              })
              .state('app.dashboard', {
                  url: "/dashboard",
                  templateUrl: "/views/dashboard.html",
                  controller:"DashboardCtrl"   
              })
              // .state('app.dashboard.rightProjects',{
              //    templateUrl:"/views/right_project_nav.html",
              //    controller:"rightProjectCtrl"
              // })
              .state('app.project', {
                  url: "/project",
                  templateUrl: "/views/project.html",
                  controller:"ProjectCtrl"   
              })
              .state('app.profile', {
                  url: "/profile",
                  templateUrl: "/views/profile.html",
                  controller:"ProfileCtrl"   
              })


        }]);
})();