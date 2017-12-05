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
    UiConfigs.init();
});

app.controller('mainController', function($scope) {
    console.log("hello world");
});




var UiConfigs = function(){

  function init(){
    configureTabs();
  }

  function configureTabs(){

    for(var i = 0; i < tabs.length; i++){
      var child = makeTab(tabs[i].color, tabs[i].link, tabs[i].text);
      document.getElementById("menu").appendChild(child);
    }



  }

  var sequencer = 0;
  function makeTab(color, link, text){
      var tab = document.createElement("div");
      tab.className = "menu-item";
      tab.id = "menu-item"+sequencer;
      tab.style.backgroundColor = color;
      tab.innerText = text;

      sequencer++;

      return tab;
  }


  var tabs = [
    { color: "#98AD92", link: "#main2",  text :"hello again"},
    { color:"#7B9475", link: "#main", text: "hello world" }
  ];

  return {
    init : init,
  }
}();
