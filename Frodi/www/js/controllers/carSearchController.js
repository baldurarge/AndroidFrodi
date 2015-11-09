(function(){
  var App = angular.module("App");

  App.controller('carSearchController',function($scope,GetAPI){

    $scope.car;
    $scope.message = "Leitaðu Að Bíl Með Bílnúmeri";
    $scope.showOrNot = false;


    $scope.search = function(searchText){
      GetAPI.getCar(searchText).then(onCarComplete);
    };

    var onCarComplete = function(data){
      console.log(data);
      if(data.length > 0){
        $scope.car = data;
        $scope.showOrNot = true;
        $scope.message = ""
      }else{
        $scope.showOrNot = false;
        $scope.message = "Ekkert Fundið";
      }
    };

  });


}());
