angular.controller('MainController')
  .factory('forecast', ['$http', function($http){
    return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json')
    .error(function(err){
      return err;
    })
    .success(function(data){
      return data;
    })
  }])
