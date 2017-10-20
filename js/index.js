var app = angular.module('Paul', ['ngRoute']);

// The router of the angular app.
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "fragments/indx.html",   
            controller: "indexController"        
        })
        .when('/link', {
            templateUrl: 'fragments/main.html',
            controller: 'mainController'
        })
        .otherwise({
            redirectTo: '/'
        });
}); 

app.controller('indexController', function($scope) {
    console.log("index");
});

app.controller('mainController', function($scope) {
    console.log("hello world");
});
