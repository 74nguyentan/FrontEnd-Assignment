"use strict";

// Declare app level module which depends on views, and core components
angular
  .module("myApp", [
    "ngRoute",
    "myApp.viewGopY",
    "myApp.viewQuiz",
    "myApp.viewHome",
    "myApp.viewStudy",
    "myApp.viewLienHe",
    "myApp.viewTraining",
    "myApp.viewGioiThieu",
    "myApp.viewBangDiem",
    "myApp.viewLichThi",
    "myApp.viewHoiDap",
    "myApp.viewLogin",
    "myApp.version",
  ])
  .config([
    "$locationProvider",
    "$routeProvider",
    function ($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("!");

      $routeProvider.otherwise({ redirectTo: "/trangchu" });
    },
  ])
  .controller("myCtrl", [
    "$scope",
    "$location",
    "$rootScope",
    "$routeParams",
    "studentFactory",
    function ($scope, $location, $rootScope, $routeParams, studentFactory) {
      
      $scope.isLogin = studentFactory.getIsLogin();
      $rootScope.$on("updates", function () {
        $scope.isLogin = studentFactory.getIsLogin();
        console.log($scope.isLogin);
      });
      // $scope.isLogin = studentFactory.getIsLogin();
      $scope.logout = () => {
        $scope.isLogin = false;
        $scope.hidenClose = "false";
        $location.path('/');
    };
    },
  ]);
