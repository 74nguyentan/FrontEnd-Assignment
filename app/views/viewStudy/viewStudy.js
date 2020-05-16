"use strict";

angular
  .module("myApp.viewStudy", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/study", {
        templateUrl: "views/viewStudy/study.html",
        controller: "ViewStudyCtrl",
      });
    },
  ])

  .controller("ViewStudyCtrl", function ($scope, $http) {
    $scope.list_subject = [];
    $http.get("db/Subjects.js").then(function (response) {
      $scope.list_subject = response.data;
      $scope.begin = 0;
      $scope.pageCount = Math.ceil(
        $scope.list_subject.length / $scope.pageSize
      );
    });

    $scope.begin = 0;
    $scope.pageSize = 6;
    $scope.count = 1;
    $scope.pageCount = Math.ceil($scope.list_subject.length / $scope.pageSize);

    $scope.first = function () {
      $scope.begin = 0;
      $scope.count = 1;
    };

    $scope.previous = function () {
      if ($scope.begin > 0) {
        $scope.begin -= $scope.pageSize;
      }
      if ($scope.count > 1) {
        $scope.count -= 1;
      }
    };
    $scope.next = function () {
      if ($scope.begin < ($scope.pageCount - 1) * $scope.pageSize) {
        $scope.begin += $scope.pageSize;
      }
      if ($scope.count < $scope.pageCount) {
        $scope.count += 1;
      }
    };

    $scope.last = function () {
      $scope.begin = ($scope.pageCount - 1) * $scope.pageSize;
      $scope.count = $scope.pageCount;
    };
  });
