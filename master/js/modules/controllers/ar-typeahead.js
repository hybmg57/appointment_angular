/**=========================================================
 * Module: ar-typeahead.js
 * Provides typeahead feature to templates
 =========================================================*/

App.controller('ARTypeaheadCtrl', ['$scope', '$http', function ($scope, $http) {

  // Any function returning a promise object can be used to load values asynchronously
  $scope.getUsers = function(val) {
    return $http.get('/api/clients.json', {
      params: {
        users: val
      }
    }).then(function(response){
      return response.data.map(function(item){
        return item.email;
      });
    });
  };

  $scope.onSelect = function ($item, $model, $label) {
    console.log($item);
    $scope.$item = $item;
    $scope.$model = $model;
    $scope.$label = $label;
  };

}]);
