var myApp = angular.module('myApp', []);

myApp.controller('todoCtrl', function($scope) {
   $scope.totalTodos = 4;
    
    $scope.todos = [
        {text: 'Learn Angular', done: false},
        {text: 'Build an Angular app', done: false}
    ];
});