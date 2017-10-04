var app = angular.module('Paul', ['ngRoute']);

// The router of the angular app.
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {            
        })
        .when('/link', {
            templateUrl: 'fragments/main.html',
            controller: 'anotherController'
        })
        .otherwise({
            redirectTo: '/'
        });
}); 

app.controller('indexController', function($scope) {
    console.log("hello world 2");
});

app.controller('anotherController', function($scope) {
    console.log("hello world");
});
