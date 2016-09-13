app.controller('theatreDetailController', ['$scope','dataService','$routeParams', function($scope,dataService,$routeParams){
  dataService.getShowTimeByTheatreId($routeParams.id).then(function(data){
    $scope.showTimeList = data;
    console.log($scope.showTimeList);
  });
}]);