"use strict";
angular
  .module("myApp")
  .factory("studentFactory", [
    "$http",
    "$routeParams",
    "$rootScope",
    "$timeout",
    function ($http, $routeParams, $rootScope, $timeout) {
      var studentFactory = {};
      var list = [];
      var isLogedin = true;
      var self = this;

      studentFactory.getIsLogin = () => {
        return isLogedin;
      };
      studentFactory.setIsLogin = (value) => {
        isLogedin = value;
        $rootScope.$broadcast("updates");
      };

      studentFactory.checkLogin = (username, password) => {
        var promise = studentFactory.getStudents().then((data) => {
          var students = data.filter((item) => {
            return item.username === username && item.password === password;
          });
          return students;
        });

        return promise;
      };

      studentFactory.getStudents = function () {
        //console.log("Test ");
        var promise = $http
          .get("db/Students.js")
          .then((response) => {
            list = response.data;
            //console.log(response.data);
            return list;
          })
          .catch((reason) => alert(reason));

        return promise;
      };
      studentFactory.getList = function () {
        // console.log('Get List Function');
        // console.log(list);
        return list;
      };

      return {
        getIsLogin: function () {
          console.log(isLogedin);
          return isLogedin;
        },
        setIsLogin: function (value) {
          isLogedin = value;
          $timeout(function () {
            $rootScope.$broadcast("updates");
          }, 0);
        },

        checkLogin: function (username, password) {
          var promise = studentFactory.getStudents().then((data) => {
            var students = data.filter((item) => {
              return item.username === username && item.password === password;
            });
            return students;
          });

          return promise;
        },

        getStudents: function () {
          //console.log("Test ");
          var promise = $http
            .get("db/Students.js")
            .then((response) => {
              list = response.data;
              //console.log(response.data);
              return list;
            })
            .catch((reason) => alert(reason));

          return promise;
        },
        getList: function () {
          // console.log('Get List Function');
          // console.log(list);
          return list;
        },
      };
    },
  ]);
//   .factory("isLogedin", [
//     "$http",
//     "$routeParams",
//     "$rootScope",
//     function ($http, $routeParams, $rootScope) {
//       var isLogedin = false;
//       return {
//         getIsLogin: function () {
//           return isLogedin;
//         },

//         setIsLogin: function (value) {
//           isLogedin = value;
//           $rootScope.$broadcast("updates");
//         },

//         checkLogin: function (username, password) {
//           var promise = this.getStudents().then((data) => {
//             var students = data.filter((item) => {
//               return item.username === username && item.password === password;
//             });
//             return students;
//           });

//           return promise;
//         },
//         getStudents: function () {
//           //console.log("Test ");
//           var promise = $http
//             .get("db/Students.js")
//             .then((response) => {
//               list = response.data;
//               //console.log(response.data);
//               return list;
//             })
//             .catch((reason) => alert(reason));

//           return promise;
//         },
//       };
//     },
//   ]);
