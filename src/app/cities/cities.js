/**
 * Created by nitesh on 5/8/15.
 */
angular.module( 'ngBoilerplate.cities', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'cities', {
    url: '/cities',
    views: {
      "main": {
        controller: 'CitiesCtrlr',
        templateUrl: 'cities/cities.tpl.html'
      }
    },
    data:{ pageTitle: 'Cities' }
  });
})

.controller( 'CitiesCtrlr', function ( $scope, CitiesServices, $log ) {
  $scope.cities = [];
  CitiesServices.getCities().then(function(data) {
    $log.log("Data returned is ", arguments);
    $scope.cities = data;
  });
})
.factory('CitiesServices', function($http) {
  return {
    getCities: function() {
      return $http({
        url: 'http://api.openweathermap.org/data/2.5/find?q=Lon&type=like&sort=population&cnt=10'
      }).then(function(resp) {
        return resp.data ? resp.data.list : [];
      });
    }
  };
});