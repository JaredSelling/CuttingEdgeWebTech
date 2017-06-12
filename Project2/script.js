var mainApp = angular.module('mainApp', []);

mainApp.controller('favoritesCtrl', function($scope) {
    
    console.log($scope.editIsVisible);

    
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
    
    $scope.toggleEdit = function() {
        
        $scope.editIsVisible = !$scope.editIsVisible;
        
        
        console.log($scope.editIsVisible);

    };
    
    /*$(document).bind('click', function() {
        var isClickedElementChildOfForm = element.find(event.target).length>0;
        
        if(isClickedElementChildOfForm)
            return;
        
        $scope.apply(function() {
            $scope.editIsVisible = false;
        });
    });*/
    
    $scope.startEdit = function(item) {
        
        $scope.toggleEdit();
        
        for(i = 0; i<$scope.itemList.length; i++) {
            if($scope.itemList[i] == item) {
                console.log($scope.itemList[i].url);
                $scope.editURL = $scope.itemList[i].url;
                $scope.editDescription = $scope.itemList[i].description;
            }
        }
    };
    
    $scope.saveChanges = function(item) {
       /* if(event.which==13 && $scope.editURL !=='' && $scope.editDescription !== '') {
            for(i = 0; i<$scope.itemList.length;i++) {
                if($scope.itemList[i] )
            }
            localStorage['itemList'] = JSON.stringify($scope.itemList);
        } */
        
        if(event.which==13 && $scope.editURL !== '' && $scope.editDescription !== '') {
            for(i = 0; i<$scope.itemList.length; i++) {
                if($scope.itemList[i] == item) {
                    $scope.itemList[i].url = event.target.parentNode.childNodes[1].value;
                    $scope.itemList[i].description = event.target.parentNode.childNodes[5].value;
                    $scope.toggleEdit();
                    console.log($scope.editIsVisible);
                    localStorage['itemList'] = JSON.stringify($scope.itemList);
                    
                }
            }
        }
    };
    
    $scope.deleteItem = function(item) {
        var index = $scope.itemList.indexOf(item);
        $scope.itemList.splice(index, 1);
        
        localStorage['itemList'] = JSON.stringify($scope.itemList);
    };
    
    
});