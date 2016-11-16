app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/pages/news/view.html',
      controller: 'newsCtrl'
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
        redirectTo: '/'
    });
}]);
