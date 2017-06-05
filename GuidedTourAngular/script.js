var appX = angular.module('mainApp', []);


appX.controller('appCtrl', function($scope) {
    
    $scope.tasks = [];
    
    
    var taskData = localStorage['tasksList'];
    
    if(taskData !== undefined) {
        $scope.tasks = JSON.parse(taskData);
    }
    
   $scope.searchEnter = function() {
       if(event.which == 13 && $scope.task != undefined) {
           $scope.addTask();
       }
   }; 
    
    $scope.addTask = function() {
        $scope.tasks.push({'taskMessage':$scope.task, 'status': false});
        console.log($scope.tasks);
        $scope.task = '';
        localStorage['tasksList'] = JSON.stringify($scope.tasks);
        console.log(localStorage);
    };
    
    $scope.contentEdit = function() {
        event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
    }
    
    $scope.saveEdit = function(msg) {
        if(event.which == 13 && msg != undefined) {
           $scope.contentEdit();
        }
    }
});