/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
describe( 'One the home view', function() {
  beforeEach( module( 'emsui.home' ) );
  beforeEach( module( 'emsui.services' ) );


  it( 'should have a dummy test', inject( function() {
    expect( true ).toBeTruthy();
  }));

  it( 'should return false if info does not have id', inject( function( $controller, $rootScope ) {
    $scope = $rootScope.$new();
    var HomeCtrl = $controller( 'HomeCtrl', { $scope: $scope});
    expect($scope.findUser()).toBeFalsy();
  }));

  it( 'should return false if info does not have id', inject( function( $controller, $rootScope ) {
    $scope = $rootScope.$new();
    var HomeCtrl = $controller( 'HomeCtrl', { $scope: $scope});
    $scope.info = {id: 1};
    expect($scope.findUser()).toBeTruthy();
  }));

});

