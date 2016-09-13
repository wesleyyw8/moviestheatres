app.controller('theatreDetailController', ['$scope','dataService','$routeParams', function($scope,dataService,$routeParams){

  dataService.getTheatresById($routeParams.id).then(function(data){
    $scope.theatre = data;
    console.log($scope.theatre);
  });
}]);