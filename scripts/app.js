angular.module("todoListApp", [])

.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function(){
    console.log("hello there! This is the helloWorld controler function in the mainCtrl");
  };

  $scope.todos = [
    {"name": "clean the house"},
    {"name": "water the dog"},
    {"name": "feed the lawn"},
    {"name": "pay dem bills"},
    {"name": "run"},
    {"name": "swim"}
  ]

  })
