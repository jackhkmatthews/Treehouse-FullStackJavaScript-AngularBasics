angular.module("todoListApp", [])

.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function(){
    console.log("hello there! This is the helloWorld controler function in the mainCtrl");
  };
})

.controller('coolCtrl', function($scope){
  $scope.whoAmI = function(){
    console.log("hello there, this is the coolCtrl function!");
  };

  $scope.helloWorld = function() {
    console.log("this is not the main ctrl!");
  };

})

.controller('imASibling', function($scope){

  $scope.foober = 1234;

})
