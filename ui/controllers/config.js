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

