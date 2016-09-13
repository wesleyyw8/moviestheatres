app.controller('theatresController', ['$scope','dataService', function($scope,dataService){
  dataService.getTheatres().then(function(data){
    $scope.theatres = data.theatres;
    console.log($scope.theatres);
  });
}]);