'use strict';

angular.module('myApp.viewBangDiem', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bangdiem', {
    templateUrl: 'views/viewBangDiem/bangdiem.html',
    controller: 'ViewBangDiemCtrl'
  });
}])

.controller('ViewBangDiemCtrl', [function() {

}]);