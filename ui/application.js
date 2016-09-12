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

app.factory('Config', [function() {
  var baseUrl = "/endpoints";
  return {
    base_url: baseUrl,
    endpoints: {
      getMovies: "/Movies",
      getTheatres: "/Theatres",
    }
  };
}]);


app.controller('indexController', ['$scope','$location', function($scope, $location){
  $scope.isActive = function (viewLocation) { 
    return viewLocation === $location.path();
  };
}]);
app.controller('moviesController', ['$scope', 'dataService',function($scope, dataService){
  dataService.getMovies().then(function(data){
    $scope.movies = data.movies;
    console.log(data.movies);
  });
}]);
app.controller('theatresController', ['$scope','dataService', function($scope,dataService){
  dataService.getTheatres().then(function(data){
    console.log(data);
  });
}]);
app.service('dataService', ["$q", "$http", "Config", function ($q, $http, Config) {
    var service = {
      getMovies: getMovies,
      getTheatres: getTheatres,
    };
    return service;
    function getTheatres(){
      var def = $q.defer();
      $http.get(Config.base_url + Config.endpoints.getTheatres).success(function(data){
        def.resolve(data);
      })
      .error(function(){
        def.reject("fail");
      })
      return def.promise;
    }
    function getMovies(){
      var def = $q.defer();
      $http.get(Config.base_url + Config.endpoints.getMovies).success(function(data){
        def.resolve(data);
      })
      .error(function(){
        def.reject("fail");
      })
      return def.promise;
    }  
  }]
);
