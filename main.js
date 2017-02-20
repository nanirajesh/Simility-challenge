(function(){
'use strict';
var app=angular.module('MainApp',[]);

app.controller('SearchController',SearchController);

app.controller('FilterController',FilterController);

app.controller('DisplayMoviesController',DisplayMoviesController);

app.directive('movieItem',MovieItem);

app.service('MovieDataService',MovieDataService);



function MovieItem(){

    var ddo={
        templateUrl:"movieitem.html"
    };

    return ddo;
}

})();