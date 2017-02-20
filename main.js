var app=angular.module('MainApp',[]);
app.controller('DisplayMoviesController',DisplayMoviesController);
app.controller('SearchController',SearchController);
app.controller('FilterController',FilterController);
app.service('DataService',DataService);
app.directive('movieItem',movieItem);
function DataService($http){
   var service=this;
   this.getData=function(){
      var promise=$http({
          url:'https://davids-restaurant.herokuapp.com/menu_items.json'
      });
      return promise;
   };
}

function SearchController(){
    
}

function FilterController(){

}

function DisplayMoviesController($scope,DataService){
   var promise=DataService.getData();
   promise.then(function(response){
      $scope.menuitems=response.data.menu_items;
   });
}
function movieItem(){
    var ddo={
        templateUrl:'movieitem.html'
    }
    return ddo;
}