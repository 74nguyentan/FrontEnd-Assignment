"use strict";

angular
  .module("myApp.viewQuiz", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/quiz/:subjectCode", {
        templateUrl: "views/viewQuiz/quiz.html",
        controller: "ViewQuizCtrl",
      });
    },
  ])

  .controller("ViewQuizCtrl",  ['quizFactory','$scope','$routeParams','$interval',function (quizFactory, $scope, $routeParams,$interval,$window) {
    
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

    $scope.currentQuestion = 0;
        $scope.questions=[];
        $scope.time = 3;
        $scope.quizMarks = 0;
        $scope.answer = {};

        if($scope.time > 0){
          var stop = $interval(()=>{ $scope.time-- }, 1000);
        }
        quizFactory.getQuestions($routeParams.subjectCode).then((data)=>{
            $scope.questions = data;
        });
        // $scope.countDown = 600;
        // $interval(function () {
        //     $scope.countDown--
        // }, 1000, $scope.countDown);

        $scope.question = () => {
            return $scope.questions[$scope.currentQuestion];
        };
        $scope.setQuestionIndex = (newIndex)=>{
           // console.log('set question index: '+ $scope.answer.choice + " ---- "+ $scope.question().AnswerId)
            if ($scope.answer.choice == $scope.question().AnswerId){
                $scope.quizMarks += $scope.question().Marks;
              //  console.log("count marks");
            }

            $scope.currentQuestion = newIndex;

            return $scope.currentQuestion;
        };
        $scope.questionTotal = ()=>{
            return $scope.questions.length;
        }
       
        $scope.submitQuiz = ()=>{
           // console.log($scope.answer + " --quiz-- "+ $scope.question().AnswerId)
            if ($scope.answer === $scope.question().AnswerId){
                $scope.quizMarks += $scope.question().Marks;
               // console.log("count marks");
                $scope.reset();
            }

            $scope.reset();
            $interval.cancel(stop);
        };
  }]);

