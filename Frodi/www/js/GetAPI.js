(function(){
  var GetAPI = function($http){

    var getCar = function(number){

      return $http.get("http://apis.is/car?number="+number)
        .then(function(res) {
          var car = res.data.results;
          return car;
      });
    };

    var getCompany = function(name){

      return $http.get("js/data/companys.json")
        .then(function(res){
          var company = [];
          for(var i = 0; i<res.data.length;i++){
            for(key in res.data[i]){
              if(res.data[i][key] == name){
                company.push(res.data[i]);
              }
            }
          }
          return company
        });
    };


    return{
      getCar:getCar,
      getCompany:getCompany
    };

  };

  var module = angular.module("App");
  module.factory("GetAPI",GetAPI);

})();
