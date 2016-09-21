// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('app', ['ionic', 'chart.js'])
                 .run(function ($ionicPlatform) {
                   $ionicPlatform.ready(function () {
                     if (window.cordova && window.cordova.plugins.Keyboard) {
                       // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                       // for form inputs)
                       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                       // Don't remove this line unless you know what you are doing. It stops the viewport
                       // from snapping when text inputs are focused. Ionic handles this internally for
                       // a much nicer keyboard experience.
                       cordova.plugins.Keyboard.disableScroll(true);
                     }
                     if (window.StatusBar) {
                       StatusBar.styleDefault();
                     }
                   });
                 });


app.service('gsvc', ['$http', function ($http) {
  this.getData = function () {
    return $http.get('http://localhost:88/SikdHost/SikdHostIis.svc/anggaranBelanja/');
  };
  this.example = [
    {
      Nilai: "21158945000",
      Rincian: "Gaji Pokok PNS/Uang Representasi"
    },
    {
      Nilai: "1912262000",
      Rincian: "Tunjangan Keluarga"
    },
    {
      Nilai: "248625000",
      Rincian: "Tunjangan Jabatan 2)"
    },
    {
      Nilai: "1919419000",
      Rincian: "Tunjangan Fungsional"
    },
    {
      Nilai: "1339975000",
      Rincian: "Tunjangan Fungsional Umum"
    },
    {
      Nilai: "1406175000",
      Rincian: "Tunjangan Beras 1)"
    },
    {
      Nilai: "355358000",
      Rincian: "Tunjangan PPh/Tunjangan Khusus"
    },
    {
      Nilai: "709000",
      Rincian: "Pembulatan Gaji"
    },
    {
      Nilai: "461406000",
      Rincian: "Iuran Asuransi Kesehatan"
    }
  ];
}]);

app.controller('ctrl', ['$scope', 'gsvc', function ($scope, gsvc) {

  $scope.chart = {
    data: [],
    labels: []
  };

  /*gsvc
    .getData()
    .success(function (data) {
      $scope.chart.data.push(data.Nilai);
      $scope.chart.labels.push(data.Rincian);
    });*/

  /**
   * ke cobaan uncomment nu luhur
   * comment nu handap
   */

  gsvc.example.forEach(function (data) {
    $scope.chart.data.push(data.Nilai);
    $scope.chart.labels.push(data.Rincian);
  });

}]);

/*app.controller('bar', ['$scope', function ($scope) {
  $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40]
  ];
}]);*/
