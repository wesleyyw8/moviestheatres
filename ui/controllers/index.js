app.controller('indexController', ['$scope','$location', function($scope, $location){
  $scope.isActive = function (viewLocation) { 
    return viewLocation === $location.path();
  };
}]);