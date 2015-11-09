(function(){
  var App = angular.module("App");

  App.controller('companySearchController',function($scope,GetAPI){

    $scope.company;
    $scope.message = "Fyrirtækja Leit";
    $scope.showOrNot = false;



    $scope.search = function(searchText){
      GetAPI.getCompany(searchText).then(onCompanyComplete);
    };

    var onCompanyComplete = function(data){
      console.log(data);
    };


  });


}());
