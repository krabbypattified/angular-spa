var app = angular.module('app', ['ngRoute']);

app.controller('root', ['$scope', function ($scope) {
  $scope.title = "News";
  $scope.navState = {};
}]);
