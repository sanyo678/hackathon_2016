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
      height: null,
      boobies: null,
      waist: null,
      butt: null,
      salary: null,
      religion: null,
      sexAge: null
    };

    var common = {
      race: 'black'
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

  })
  .controller('resultsController', function ($scope, $http, propertiesService) {
    $scope.service = propertiesService;
    $scope.common = $scope.service.common;
    $scope.properties = $scope.service.properties;

    $http({
      method: 'GET',
      url: 'http://localhost:8080/api/v1/cities?' + Object.keys($scope.service.properties).map(function (key) {
        return key.toString() + '=' + $scope.service.properties[key];
      }).join('&')
    }).then(function (response) {
     $scope.common.results = response.data;
    }, function (response) {
      console.log('SYKA' + response.statusText);
    });
  })
