var mainApp = angular.module('mainApp', []);

mainApp.controller('favoritesCtrl', function($scope) {
    
    $scope.selected = true;
    
    $scope.itemList = [];
    
    var itemData = localStorage['itemList'];
    
   /* var clickEvent = new MouseEvent("click", {
        "view": window,
        "bubbles": true,
        "cancelable": false
    }); */
    
    if(itemData !== undefined) {
        $scope.itemList = JSON.parse(itemData);
    }
    

    

    
    $scope.searchEnter = function() {
        if(event.which == 13 && $scope.newItem!==undefined && $scope.description !==undefined) {
            $scope.addItem();
        }
    };
    
    $scope.clickAdd = function() {
        if($scope.newItem !== undefined && $scope.description !== undefined) {
            $scope.addItem();
        }
    }
    
    $scope.addItem = function() {
        $scope.itemList.push({url:$scope.newItem, description: $scope.description});
        $scope.newItem = undefined;
        $scope.description = undefined;
        localStorage['itemList'] = JSON.stringify($scope.itemList);
    };
    
    $scope.toggleEdit = function() {
        
        $(document).click();
        
        $scope.editIsVisible = !$scope.editIsVisible;
        
        if($scope.editIsVisible == false) {
            $(document).click();
        }

    };
    
    $(document).bind('click', function() { 
        
        $scope.$apply(function() {
            $scope.editIsVisible = false;
        });
    }); 
    
    
    
    $scope.startEdit = function(item) {
        
        $scope.toggleEdit();
        
        console.log($scope.editIsVisible);
        
        for(i = 0; i<$scope.itemList.length; i++) {
            if($scope.itemList[i] == item) {
                console.log($scope.itemList[i].url);
                $scope.editURL = $scope.itemList[i].url;
                $scope.editDescription = $scope.itemList[i].description;
            }
        }
    };
    
    $scope.stopEdit = function(item) {
        $scope.editIsVisible = false; 
    };
    
    $scope.enterSubmit = function(item) {
        if(event.which == 13 && $scope.editURL !== '' && $scope.editDescription !== '') {
            $scope.toggleEdit();
            $scope.enterSaveChanges(item);
        }
    };
    
    $scope.clickSubmit = function(item) {
        console.log("submit clicked");
        if($scope.editURL !== '' && $scope.editDescription !== '') {
            $scope.toggleEdit();
            $scope.clickSaveChanges(item);
        }
    };
    

    
    $scope.clickSaveChanges = function(item) {
            for(i = 0; i<$scope.itemList.length; i++) {
                if($scope.itemList[i] == item) {
                    $scope.itemList[i].url = event.target.parentNode.parentNode.childNodes[3].value;
                    $scope.itemList[i].description = event.target.parentNode.parentNode.childNodes[9].value;
                   
                    localStorage['itemList'] = JSON.stringify($scope.itemList);
                }
            }
    };
    
    $scope.enterSaveChanges = function(item) {
        for(i=0; i<$scope.itemList.length; i++) {
            if($scope.itemList[i] == item) {
                $scope.itemList[i].url = event.target.parentNode.childNodes[3].value;
                $scope.itemList[i].description = event.target.parentNode.childNodes[9].value;

                localStorage['itemList'] = JSON.stringify($scope.itemList);              
            }

        }
    };
    

    
    $scope.deleteItem = function(item) {
        var index = $scope.itemList.indexOf(item);
        $scope.itemList.splice(index, 1);
        
        localStorage['itemList'] = JSON.stringify($scope.itemList);
    };
    
    document.addEventListener('focusin', function(e) { console.log(document.activeElement + " focused")});
    
    document.addEventListener('focusout', function(e) {console.log(document.activeElement + " losing focus")});
    
});

/*mainApp.directive('ngEnter',function () {
    return function (scope, element, attrs) {
        element.bind('keydown keypress', function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
}); */

