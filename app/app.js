var app = angular.module('app', ['ui.materialize'])

.controller('globalCtrl', ["$scope", function ($scope) {
    $scope.select = {
        value: "Option1",
        choices: ["Option1", "I'm an option", "This is materialize", "No, this is Patrick."]
    };
}]);
