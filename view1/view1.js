'use strict';

angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', function ($scope, $http) {

    $scope.message="hello";
   
    $http.get("https://wpv96pp4nh.execute-api.us-east-1.amazonaws.com/dev/book").then(function (response, error) {
      
      $scope.message = response;
     
    })
  });