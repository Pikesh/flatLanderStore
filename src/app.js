(function(){
  var app=angular.module('store' ,["reviews"]);

  app.controller("StoreController", ['$http',function($http){
    var store = this;
    store.products=[];

    $http.get('data/products.json').then(
      function(response){
        store.products = response.data;
      }
    );

    this.addReview = function(review,index){
      store.temp = JSON.parse(JSON.stringify(review)); //preventing shallow copy
      store.products[index].reviews.push(this.temp);
    };
  }]);
  /*app.controller("TabController",function(){
  this.tab =1;
  this.tabSelect = function(tabNumber){
  this.tab = tabNumber;
};
this.isActive = function(tabNumber){
return this.tab === tabNumber;
};
});*/
app.controller("ReviewController", function(){
  this.rView={};
  this.clearFields = function(){
    this.rView={};
  };
});
/*app.directive("reviewForm", function(){
return{
restrict:'E',
templateUrl:'/templates/review-form.html'
};
});*/
app.directive("titleProduct", function(){
  return{
    restrict:'E',
    templateUrl:'/templates/title-product.html'
  }
});
/*app.directive("pane",function(){
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
});*/
})();
