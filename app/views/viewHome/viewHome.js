'use strict';

angular.module('myApp.viewHome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/trangchu', {
    templateUrl: 'views/viewHome/home.html',
    controller: 'ViewHomeCtrl'
  });
}])

.controller('ViewHomeCtrl', [function() {

}]);