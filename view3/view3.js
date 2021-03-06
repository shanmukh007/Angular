'use strict';

angular.module('myApp.view3', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view3', {
      templateUrl: 'view3/view3.html',
      controller: 'View3Ctrl'
    });
  }])

  .controller('View3Ctrl', function ($scope, $http) {
   
    $http.get("https://wpv96pp4nh.execute-api.us-east-1.amazonaws.com/dev/book").then(function (response, error) {

        console.log(response);
      $scope.message = response.data;
    })
  });