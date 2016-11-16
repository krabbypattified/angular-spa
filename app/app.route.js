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
