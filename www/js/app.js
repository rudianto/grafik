// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('app', ['ionic','chart.js'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


app.service('gsvc', ['$http', function ($http) {
    this.index = function () {
        return $http.get('http://localhost:88/SikdHost/SikdHostIis.svc/anggaranBelanja/');
    }
}]);

app.controller('ctrl', ['$scope', 'gsvc', function ($scope, gsvc) {
    gsvc.index().success(function (data) {
        var b = [$scope.grfk = data];
        

    });
}]);


//chart bar
app.controller('bar', ['$scope', function ($scope) {
    $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    

    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40]
    ];
}]);

