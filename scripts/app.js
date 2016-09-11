angular.module("todoListApp", [])

.controller('mainCtrl', function($scope, dataService) {
  $scope.learningNgChange = function(){
    console.log("input changed");
  };
  
  $scope.helloWorld = dataService.helloWorld;

  dataService.getTodos(function(response){
    console.log(response.data)
    $scope.todos = response.data;
  });
})
.service('dataService', function($http){
  this.helloWorld = function(){
    console.log('this is the data services method')
  };
  this.getTodos = function(callback){
    $http.get('mock/todos.json')
    .then(callback)
  }
});
