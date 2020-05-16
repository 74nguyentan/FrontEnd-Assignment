'use strict';

angular.module('myApp.viewLichThi', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/lichthi', {
    templateUrl: 'views/viewLichThi/lichthi.html',
    controller: 'ViewLichThiCtrl'
  });
}])

.controller('ViewLichThiCtrl', function($scope, $http) {
 $scope.listLichThi = [];
 $http.get('db/lichthi.js').then(function(res){
   $scope.listLichThi = res.data;
 });
});