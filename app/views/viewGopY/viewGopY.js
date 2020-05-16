'use strict';

angular.module('myApp.viewGopY', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gopy', {
    templateUrl: 'views/viewGopY/gopy.html',
    controller: 'ViewGopYCtrl'
  });
}])

.controller('ViewGopYCtrl', [function() {

}]);