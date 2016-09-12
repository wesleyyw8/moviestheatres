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
