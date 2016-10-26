app.controller('MainController', ['$scope', 'forecast', function($scope, forecast)  {

  // forecast
  // .success(function(data) {
  //     $scope.fiveDay = data;
  //   });
    forecast.display()
    .error(function(err){
      return err;
    })
    .success(function(data){
      console.log(data);
      $scope.fiveDay =  data;
    })

}]);
