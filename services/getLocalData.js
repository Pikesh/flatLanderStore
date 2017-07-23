(function(){

  var app = angular.module("serv",[]);
  app.factory('fromLOCALJSON', function(){
    this.read = function(src){
      this.dataFetched = [];
      $http.get(src).then(
        function(response){
          this.dataFetched = response.data;
        }
      )
    };
    return this.dataFetched;
  });
})();
