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
    when('/theatres/:id', {
      templateUrl: '../views/theatreDetail.html',
      controller: 'theatreDetailController'
    }).
    when('/movies/:id', {
      templateUrl: '../views/movieDetail.html',
      controller: 'moviesDetailController'
    }).
    otherwise({
      redirectTo: '/movies'
    });
}]);

app.factory('Config', [function() {
  var baseUrl = "/endpoints";
  return {
    base_url: baseUrl,
    endpoints: {
      getMovies: "/Movies",
      getTheatres: "/Theatres",
      getShowTime: "/Showtime",
      getShowTimeByTheatreId: "/Showtime/byTheatreId",
      getShowTimeByMovieId: "/Showtime/byMovieId"
    }
  };
}]);

