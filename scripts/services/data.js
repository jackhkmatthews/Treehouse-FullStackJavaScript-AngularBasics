'user strict';

angular.module('todoListApp')
.service('dataService', function($http){
  this.helloWorld = function(){
    console.log('this is the data services method')
  };
  this.getTodos = function(callback){
    $http.get('mock/todos.json')
    .then(callback)
  };

  this.deleteTodo = function(todo){
    console.log("the" + todo.name + " has been deleted!");
  };

  this.saveTodo = function(todo){
    console.log("the" + todo.name + " todo has been saved");
  };
});
