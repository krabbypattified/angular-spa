var app = angular.module('app', ['ngRoute']);

app.controller('root', ['$scope', function ($scope) {
  $scope.title = "News";
  $scope.navState = {};
}]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/pages/news/view.html',
      controller: 'newsCtrl'
    })

    .when('/email', {
      templateUrl: 'app/sandbox/email.html',
      controller: 'EmailController'
    })

    .when('/todo', {
      templateUrl: 'app/sandbox/todo.html',
      controller: 'TodoController'
    })

    .otherwise({
        redirectTo: '/'
    });
}]);

app.controller('TodoController', ['$scope', function ($scope) {
  $scope.todos = [
    { name: 'Master HTML/CSS/Javascript', completed: true },
    { name: 'Learn AngularJS', completed: false },
    { name: 'Build NodeJS backend', completed: false },
    { name: 'Get started with ExpressJS', completed: false },
    { name: 'Setup MongoDB database', completed: false },
    { name: 'Be awesome!', completed: false },
  ];
}]);

app.controller('EmailController', ['$scope', function ($scope) {
  $scope.name = "Gabe";
  $scope.email = "rogangabe@gmail.com";
}]);








app.controller('NewsCtrl', ['$scope', function ($scope) {
  $scope.test = "Title";
  $scope.test2 = "xxdddd";
}]);

