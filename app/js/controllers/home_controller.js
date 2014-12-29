angular.module("app").controller('HomeController', function($scope, $location, AuthenticationService) {
  
  var onLogoutSuccess = function(response) {
    $location.path('/login');
  };
  
  $scope.logout = function() {
    AuthenticationService.logout().success(onLogoutSuccess);
  };
  
});
