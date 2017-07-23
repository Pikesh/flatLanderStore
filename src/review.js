(function(){
  var app=angular.module("reviews",[]);

  app.directive("reviewForm", function(){
    return{
    restrict:'E',
    templateUrl:'/templates/review-form.html'
  };
  });

  app.directive("pane",function(){
    return{
      restrict:'E',
      templateUrl:'/templates/pane.html',
      controller: function(){
        this.tab =1;
        this.tabSelect = function(tabNumber){
          this.tab = tabNumber;
        };
        this.isActive = function(tabNumber){
          return this.tab === tabNumber;
        };
      },
      controllerAs: 'pane'
    };
  });
  
})();
