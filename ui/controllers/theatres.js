app.controller('theatresController', ['$scope','dataService', function($scope,dataService){
  dataService.getTheatres().then(function(data){
    console.log(data);
  });
}]);