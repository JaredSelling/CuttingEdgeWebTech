var mainApp = angular.module('mainApp', []);

mainApp.controller('favoritesCtrl', function($scope) {

    
    $scope.selected = true;
    
    $scope.itemList = [];
    
    var itemData = localStorage['itemList'];
    
    if(itemData !== undefined) {
        $scope.itemList = JSON.parse(itemData);
    }
    
    $scope.searchEnter = function() {
        if(event.which == 13 && $scope.newItem!==undefined && $scope.description !==undefined) {
            $scope.addItem();
        }
    };
    
    $scope.addItem = function() {
        $scope.itemList.push({url:$scope.newItem, description: $scope.description});
        console.log($scope.itemList);
        $scope.newItem = undefined;
        $scope.description = undefined;
        localStorage['itemList'] = JSON.stringify($scope.itemList);
    };
    
    $scope.toggleEdit = function(item) {
        
        $scope.editIsVisible = !$scope.editIsVisible;
        
       /* for(i = 0; i<$scope.itemList.length; i++) {
            if($scope.itemList[i] == item) {
                    $scope.itemList[i] = event.target.parentNode.firstChild.innerText;
                console.log(event.target.parentNode.firstChild.innerText);
            }
        }
        
        localStorage['itemList'] = JSON.stringify($scope.itemList);
        
        event.target.parentNode.firstChild.contentEditable = event.target.parentNode.firstChild.contentEditable == "false" ? "true" : "false";*/
    };
    
    $scope.saveChanges = function(item) {
        if(event.which==13 && item !=='') {
            $scope.toggleEdit(item);
        }
    };
    
    $scope.deleteItem = function(item) {
        var index = $scope.itemList.indexOf(item);
        $scope.itemList.splice(index, 1);
        
        localStorage['itemList'] = JSON.stringify($scope.itemList);
    };
    
    
});