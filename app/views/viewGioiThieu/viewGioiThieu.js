'use strict';

angular.module('myApp.viewGioiThieu', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gioithieu', {
    templateUrl: 'views/viewGioiThieu/gioithieu.html',
    controller: 'ViewGioiThieuCtrl'
  });
}])

.controller('ViewGioiThieuCtrl', [function() {

}]);