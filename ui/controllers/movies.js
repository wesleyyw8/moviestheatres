app.controller('moviesController', ['$scope', 'dataService',function($scope, dataService){
  dataService.getMovies().then(function(data){
    $scope.movies = data.movies;
    console.log(data.movies);
  });
}]);