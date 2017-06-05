var app = angular.module('myApp', []);

app.directive("testDirective", function() {
   return {
       restrict: "EA",
       template: "I was made in a directive constructor"
   }; 
});