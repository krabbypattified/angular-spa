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
