var appX = angular.module('mainApp', []);


appX.controller('appCtrl', function($scope) {
    
    $scope.tasks = [];
    
   $scope.searchEnter = function() {
       if(event.which == 13 && $scope.task != undefined) {
           $scope.addTask();
       }
       return false;
   }; 
    
    $scope.addTask = function() {
        $scope.tasks.push($scope.task);
        console.log($scope.tasks);
    };
});