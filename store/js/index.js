var myApp = angular.module('myApp', ['uiGmapgoogle-maps']);

myApp.factory("Markers", function(){
  var Markers = [
    {
      "id": "0",
      "coords": {
        "latitude": "23.0679",
        "longitude": "87.3165"
      },
      "window": {
        "title": "Bishnupur West Bengal, India"
      }
    },
    {
    "id": "1",
      "coords": {
        "latitude": "22.1772",
        "longitude": "88.4258"
      },
      "window" : {
        "title": "Jaynagar West Bengal, India"
      }
    }
  ];
  return Markers;
});

myApp.controller("gMap",function($scope,Markers){
  $scope.map = { 
    center: { latitude: 22.5726, longitude:  88.3639 }, 
    zoom: 9
  };
  $scope.markers = Markers;
});