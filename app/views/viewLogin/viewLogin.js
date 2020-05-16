"use strict";

angular
  .module("myApp.viewLogin", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/login", {
        templateUrl: "views/viewLogin/login.html",
        controller: "ViewLoginCtrl",
        resolve: {
          initialData: (studentFactory) => {
            return studentFactory.getStudents();
          },
        },
      });
    },
  ])

  .controller("ViewLoginCtrl", [
    "$scope",
    "$location",
    "$routeParams",
    "studentFactory",
    function ($scope, $location, $routeParams, studentFactory) {
      $scope.loginForm = {};
      $scope.errorMessage = null;

      $scope.checkLogin = () => {
        studentFactory
          .checkLogin($scope.loginForm.username, $scope.loginForm.password)
          .then((data) => {
            if (data != null && data.length > 0) {
              studentFactory.setIsLogin(true);
              console.log(studentFactory.getIsLogin());
              
              $location.path("/");
              $scope.errorMessage = null;
            } else {
              studentFactory.setIsLogin(false);
              $scope.errorMessage = "Invalid username or password";
            }
          });
      };
    },
  ]);
