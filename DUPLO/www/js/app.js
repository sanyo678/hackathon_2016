// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ionicApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
  });
})
  .config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('selecting', {
      url: '/selecting',
      templateUrl: 'templates/selecting.html',
      controller: 'selectingController'
    })
    .state('map', {
      url: '/map',
      templateUrl: 'templates/map.html',
      controller: 'mapController'
    })
    .state('results', {
      url: '/results',
      templateUrl: 'templates/results.html',
      controller: 'resultsController'
    });
  $urlRouterProvider.otherwise('/selecting');
})
  .service('propertiesService', function () {
    var properties = {
      color: null,
      height: 170,
      boobies: 1,
      waist: 0,
      butt: 0,
      // salary: null,
      // religion: null,
      // sexAge: null
    };

    var common = {
      race: 'white',
      boobs: ['img/boobs_1.png', 'img/boobs_2.png', 'img/boobs_3.png'],
      waists: ['img/waist_1.png', 'img/waist_2.png', 'img/waist_3.png'],
      bats: ['img/bat_1.jpg', 'img/bat_2.jpg', 'img/bat_3.jpg']
    };

    return {
      properties: properties,
      common: common
    };
  })
  .controller('selectingController', function ($scope, propertiesService) {
    $scope.service = propertiesService;
    $scope.common = $scope.service.common;
    $scope.properties = $scope.service.properties;

    $scope.changeHeight = function (height) {
      $scope.properties.height = height;
    }

    $scope.changeBoobs = function () {
      $scope.properties.boobies = ($scope.properties.boobies + 1) % 3;
    }

    $scope.changeWaist = function () {
      $scope.properties.waist = ($scope.properties.waist + 1) % 3;
    }

    $scope.changeBat = function () {
      $scope.properties.butt = ($scope.properties.butt + 1) % 3;
    }

  })
  .controller('resultsController', function ($scope, $http, propertiesService) {
    $scope.service = propertiesService;
    $scope.common = $scope.service.common;
    $scope.properties = $scope.service.properties;

    $scope.properties.color = $scope.common.race === 'black' ? 0 : ($scope.common.race === 'white' ? 1 : 2);

    $scope.resultsReady = false;

    $scope.goToMap = function (item) {
      $scope.common.name = item.name;
      $scope.common.latitude = item.latitude;
      $scope.common.longitude = item.longitude;
    }

    $http({
      method: 'GET',
      url: 'http://localhost:8080/api/v1/cities?' + Object.keys($scope.service.properties).map(function (key) {
        return key.toString() + '=' + $scope.service.properties[key];
      }).join('&')
    }).then(function (response) {
      if (response.data.code != 0) {
        console.log('SYKA' + response.data.error);
      } else {
        $scope.resultsReady = true;
        $scope.common.results = response.data.response;
      }
    }, function (response) {
      console.log('SYKA' + response.statusText);
    });
  })
  .controller('mapController', function ($scope, $compile, propertiesService) {
    $scope.service = propertiesService;
    $scope.common = $scope.service.common;


    var myLatlng = new google.maps.LatLng($scope.common.latitude, $scope.common.longitude);

    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"),
      mapOptions);


    var contentString = "<div><a ng-click='clickTest()'>" + $scope.common.name + "</a></div>";
    var compiled = $compile(contentString)($scope);

    var infowindow = new google.maps.InfoWindow({
      content: compiled[0]
    });

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: $scope.common.name
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });

    $scope.map = map;

  })
