app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/todos.html',
      controller: 'TodoController'
    })

    .when('/email', {
      templateUrl: '/email.html',
      controller: 'EmailController'
    })

    .when('/todo', {
      templateUrl: '/todos.html',
      controller: 'TodoController'
    })

    .otherwise({
        redirect: '/index.html'
    });
}]);
