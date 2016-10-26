app.factory('forecast', ['$http', forecast])

function forecast($http){
    return {
      display: display
    }

function display(){
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json')
}
}
