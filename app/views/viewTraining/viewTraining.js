"use strict";

angular
  .module("myApp.viewTraining", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/training", {
        templateUrl: "views/viewTraining/training.html",
        controller: "ViewTrainingCtrl",
      });
    },
  ])

  .controller("ViewTrainingCtrl", function ($scope, $http, $window) {
    $scope.list_subject = [];
    $http.get("db/Subjects.js").then(function (response) {
      $scope.list_subject = response.data;

      $scope.pageCount = Math.ceil(
        $scope.list_subject.length / $scope.pageSize
      );
      $scope.begin = 0;
    });

    // chia trang list môn học
    $scope.pageSize = 7;
    $scope.begin = 0;
    $scope.count = 1;
    $scope.pageCount = Math.ceil($scope.list_subject.length / $scope.pageSize);
    $scope.previous = function () {
      if ($scope.begin > 0) {
        $scope.begin -= $scope.pageSize;
        if ($scope.count > 1) {
          $scope.count -= 1;
        }
      }
    };
    $scope.next = function () {
      if ($scope.begin < ($scope.pageCount - 1) * $scope.pageSize) {
        $scope.begin += $scope.pageSize;
        if ($scope.count < $scope.pageCount) {
          $scope.count += 1;
        }
      }
    };

    $scope.start = function () {
      $scope.inProgess = true;
      $scope.inProgessStart = false;
    };
    $scope.reset = function () {
      $scope.inProgess = false;
      $scope.inProgessPoint = true;
    };
    $scope.inProgessPoint = false;
    $scope.inProgess = false;
    $scope.inProgessStart = true;

    // dữ liệu Questions

    // // $scope.id = 1;
    // //$scope.list_question = [];
    // $http.get("db/Quizs/ADAV.js").then(function (res) {
    //   $scope.list_question = res.data;
    //   $window.alert($scope.list_question.length);
    //    // $scope.pageCountQiz = Math.ceil(
    //   //   $scope.list_questions.length / $scope.pageSizeQiz
    //   // );
    //   // $scope.beginQiz = 0;
    // });

    // $scope.getQues = function (id) {
      // var randomItem = $scope.list_question[Math.floor(Math.random()  * $scope.list_question.length)];
    //   var count = $scope.list_question.length;
    //   if (count > 10) {
    //     count = 10;
    //   }
    //   if (id < count) {
    //     return randomItem;
    //   } else {
    //     return false;
    //   }
    // };
    // $scope.getQuestion = function () {
    //   var quiz = $scope.getQues($scope.id);

    //   if (quiz) {
    //     $scope.question = quiz.Text;
    //     $scope.options = quiz.Answers;
    //     $scope.answer = quiz.AnswerId;
    //     $scope.answerMode = true;
    //   } else {
    //     $scope.quizOver = true;
    //   }
    // };
    // $scope.getQuestion();

    // $scope.nextQuestion = function () {
    //   $scope.id++;
    //   $scope.getQuestion();
    // };

    $scope.list_questions = [];
    $http.get("db/ADAV.js").then(function (res) {
      $scope.list_questions = res.data;
    });

    $scope.question = "questions .....";
    $scope.options = [
      { Id: 104118, Text: "3" },
      { Id: 104119, Text: "4" },
      { Id: 104120, Text: "1" },
      { Id: 104121, Text: "2" },
    ];
    var answer = 104121;
    $scope.checkAnswer = function () {
      //  if(!('input[name = answer]:checked').length) return;
      //  var ans = $scope('input[name = answer]:checked').val();
      //  if(ans == answer){
      //   $window.alert("Đúng ... !");
      //  }
      //  else{
      // var ans = $scope.answer;
      // $window.alert( ans);
      //  }
    };

    // chia list question
    $scope.beginQiz = 0;
    $scope.pageSizeQiz = 1;
    $scope.countQiz = 1;
    $scope.pageCountQiz = Math.ceil(
      $scope.list_questions.length / $scope.pageSizeQiz
    );

    $scope.firstQiz = function () {
      $scope.beginQiz = 0;
      $scope.countQiz = 1;
    };

    $scope.previousQiz = function () {
      if ($scope.beginQiz > 0) {
        $scope.beginQiz -= $scope.pageSizeQiz;
      }
      if ($scope.countQiz > 1) {
        $scope.countQiz -= 1;
      }
    };
    $scope.nextQiz = function () {
      if ($scope.beginQiz < ($scope.pageCountQiz - 1) * $scope.pageSizeQiz) {
        $scope.beginQiz += $scope.pageSizeQiz;
      }
      if ($scope.countQiz < $scope.pageCountQiz) {
        $scope.countQiz += 1;
      }
    };

    $scope.lastQiz = function () {
      $scope.beginQiz = ($scope.pageCountQiz - 1) * $scope.pageSizeQiz;
      $scope.countQiz = $scope.pageCountQiz;
    };
  });
