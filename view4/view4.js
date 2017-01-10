'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl',function($scope,$http) {

 $scope.book={};
  
  var apiUrl="https://wpv96pp4nh.execute-api.us-east-1.amazonaws.com/dev/book";
 $scope.save=function(){
   $http.post(apiUrl,$scope.book).then(function(response,error)
     {
console.log(response);
console.log(error);


   })

   
 }
  });