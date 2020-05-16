'use strict';

angular.module('myApp.viewHoiDap', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/hoidap', {
    templateUrl: 'views/viewHoiDap/hoidap.html',
    controller: 'ViewHoiDapCtrl'
  });
}])

.controller('ViewHoiDapCtrl', [function() {

}]);