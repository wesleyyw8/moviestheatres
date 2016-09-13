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


app.controller('indexController', ['$scope','$location', function($scope, $location){
  $scope.isActive = function (viewLocation) { 
    return viewLocation === $location.path();
  };
}]);
app.controller('moviesDetailController', ['$scope', 'dataService','$routeParams',function($scope, dataService, $routeParams){
  dataService.getShowTimeByMovieId($routeParams.id).then(function(data){
    $scope.theatres = data;
    $scope.movieTitle = data[0].title;
    console.log(data);
  });
}]);
app.controller('moviesController', ['$scope', 'dataService',function($scope, dataService){
  dataService.getMovies().then(function(data){
    $scope.movies = data.movies;
    console.log(data.movies);
  });
}]);
app.controller('theatreDetailController', ['$scope','dataService','$routeParams', function($scope,dataService,$routeParams){
  dataService.getShowTimeByTheatreId($routeParams.id).then(function(data){
    $scope.showTimeList = data;
    console.log($scope.showTimeList);
  });
}]);
app.controller('theatresController', ['$scope','dataService', function($scope,dataService){
  dataService.getTheatres().then(function(data){
    $scope.theatres = data.theatres;
    console.log($scope.theatres);
  });
}]);
app.service('dataService', ["$q", "$http", "Config", function ($q, $http, Config) {
    var service = {
      getMovies: getMovies,
      getTheatres: getTheatres,
      getShowTimeByTheatreId: getShowTimeByTheatreId,
      getShowTimeByMovieId: getShowTimeByMovieId
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
    function getShowTimeByTheatreId(id){
      var def = $q.defer();
      $http.get(Config.base_url + Config.endpoints.getShowTimeByTheatreId+"/"+id).success(function(data){
        def.resolve(data);
      })
      .error(function(){
        def.reject("fail");
      })
      return def.promise;
    }
    function getShowTimeByMovieId(id){
      var def = $q.defer();
      $http.get(Config.base_url + Config.endpoints.getShowTimeByMovieId+"/"+id).success(function(data){
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
