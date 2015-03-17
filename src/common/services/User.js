/**
 * Created by nitesh on 3/17/15.
 */
angular.module('emsui.services', [])
.factory('UserService', function ($http, $log) {
  return {
    get: function (user) {
      return $http({
        url: '/user/get/'+user.id
      }).then(function(resp) {
        return resp.data;
      });
    },
    findByFirstName: function(user) {
      return $http({
        url: '/user/getByFirst/' +user.firstname
      }).then(function(resp) {
        return resp.data;
      });
    },
    findByLastName: function(user) {
      return $http({
        url: '/user/getByLast/'+user.lastname
      }).then(function(resp) {
        return resp.data;
      });
    }
  };
});