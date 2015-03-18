/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'emsui.home', [
  'ui.router'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      },
      "header": {
        templateUrl: 'html/header.tpl.html'
      },
      "footer": {
        templateUrl: 'html/footer.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', function HomeController( $scope, UserService ) {
  $scope.info = {};
  $scope.users = [];

  $scope.findUser = function() {
    if(!$scope.info.id) {
      return false;
    }
    return UserService.get($scope.info).then(function(user) {
      $scope.users = [user];
    }, function() {
      $scope.users = ["Can i throw index out of bound exception?"];
    });
  };

  $scope.findUserByFirstName = function() {
    if(!$scope.info.firstname) {
      return false;
    }
    UserService.findByFirstName($scope.info).then(function(users) {
      $scope.users = users;
    }, function() {
      $scope.users = ["Can i throw a 404?"];
    });
  };

});

