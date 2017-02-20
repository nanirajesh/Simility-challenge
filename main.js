(function(){
'use strict';
var app=angular.module('MainApp',[]);

app.service('MovieDataService',MovieDataService);
app.controller('SearchController',['$scope',SearchController]);

app.controller('FilterController',['$scope',FilterController]);

app.controller('DisplayMoviesController',['MovieDataService',function(MovieDataService){
    var promise=MovieDataService.getData();
    promise.then(function(response){
        console.log(response.data);
    },function(response){
        console.log(response.errormessage);
    });
}]);

app.directive('movieItem',MovieItem);




function SearchController(){

}

function FilterController(){

}
//DisplayMoviesController.$inject=['MovieDataService'];


MovieDataService.$inject=['$scope','$http'];
function MovieDataService($scope,$http){  
    
 this.getData = function(){
    var data=$http({
        method:'GET',
        url:'https://davids-restaurant.herokuapp.com/menu_items.json'
    });
   return data;
    };
}


function MovieItem(){

    var ddo={
        templateUrl:"movieitem.html"
    };

    return ddo;
}

})();