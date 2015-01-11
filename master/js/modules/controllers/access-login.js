/**=========================================================
 * Module: access-login.js
 * Demo for login api
 =========================================================*/

App.controller('LoginFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
  $scope.$on('auth:login-error', function(ev, reason){
    console.log('Login error');
    $scope.errors = reason.errors.full_messages;
  });

  // bind here all data from the form
  //$scope.account = {};
  // place the message if something goes wrong
  //$scope.authMsg = '';

  //$scope.login = function() {
  //  $scope.authMsg = '';
  //
  //  $http
  //    .post('api/auth/sign_in', {email: $scope.account.email, password: $scope.account.password})
  //    .then(function(response) {
  //      // assumes if ok, response is an object with some data, if not, a string with error
  //      // customize according to your api
  //
  //      if ( !response.account ) {
  //        console.log(response)
  //        $scope.authMsg = 'Incorrect credentials.';
  //      }else{
  //        $state.go('app.dashboard');
  //      }
  //    }, function(x) {
  //      $scope.authMsg = x.data.errors[0];
  //    });
  //};

}]);

