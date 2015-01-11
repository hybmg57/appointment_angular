/**=========================================================
 * Module: access-register.js
 * Demo for register account api
 =========================================================*/

App.controller('RegisterFormController', ['$scope', '$state', '$auth', function($scope, $state, $auth) {
  $scope.$on('auth:registration-email-error', function(ev, reason) {
      $scope.errors = reason.errors.full_messages;
  });
  $scope.handleRegBtnClick = function() {
      $auth.submitRegistration($scope.registrationForm)
          .then(function() {
              $auth.submitLogin({
                  email: $scope.registrationForm.email,
                  password: $scope.registrationForm.password
              });
          });
  };
}]);
