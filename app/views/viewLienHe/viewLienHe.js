'use strict';

angular.module('myApp.viewLienHe', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/lienhe', {
    templateUrl: 'views/viewLienHe/lienhe.html',
    controller: 'ViewLienHeCtrl'
  });
}])

.controller('ViewLienHeCtrl', [function() {

}]);