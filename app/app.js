var app = angular.module('app', ['ui.materialize'])

.controller('GlobalCtrl', ["$scope", function ($scope) {
  $scope.title = "News";
  $scope.select = {
      value: "Option1",
      choices: ["Option1", "I'm an option", "This is materialize", "No, this is Patrick."]
  };
}]);
