var app = angular.module('moviesTheatresApp' , ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){
  $routeProvider.
    when('/theatres', {
      templateUrl: '../views/theatres.html',
      controller: 'theatresController'
    }).
    when('/movies', {
      templateUrl: '../views/movies.html',
      controller: 'moviesController'
    }).
    otherwise({
      redirectTo: '/movies'
    });
}]);


app.controller('indexController', ['$scope','$location', function($scope, $location){
  $scope.isActive = function (viewLocation) { 
    return viewLocation === $location.path();
  };
}]);
app.controller('moviesController', ['$scope', function($scope){
  //console.log('movies');
}]);
app.controller('theatresController', ['$scope', function($scope){
 // console.log('theatres');
}]);