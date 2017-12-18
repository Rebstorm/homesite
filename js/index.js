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
      // Start UI config yahoo pattern.
      UiConfigs.init();
});

app.controller('indexController', function($scope) {
    console.log("home again");
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
      tab.className = "menu-item blinking";
      tab.id = "menu-item"+sequencer;
      tab.style.backgroundColor = color;
      tab.innerText = text;

      // The on click button handler
      makeEventHandler(tab, link);

      sequencer++;

      return tab;
  }

  function makeEventHandler(e, link){
    e.addEventListener("click", (e) => {
      document.location = link;
    });
  }


  var tabs = [
    { color: "#98AD92", link: "#!link",  text :"hello again"},
    { color:"#7B9475", link: "#main", text: "hello world" },
    { color: "#98AD92", link: "#main2",  text :"hello again"},
    { color:"#7B9475", link: "#main", text: "hello world" }
  ];

  return {
    init : init,
  }
}();
