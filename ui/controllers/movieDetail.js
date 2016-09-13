app.controller('moviesDetailController', ['$scope', 'dataService','$routeParams',function($scope, dataService, $routeParams){
  dataService.getShowTimeByMovieId($routeParams.id).then(function(data){
    $scope.theatres = data;
    $scope.movieTitle = data[0].title;
    console.log(data);
  });
}]);