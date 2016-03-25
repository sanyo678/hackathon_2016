// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ionicApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    
  });
}).config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('selecting', {
      url: '/selecting',
      templateUrl: 'templates/selecting.html',
      controller: 'selectingController'
    })
    .state('results', {
      url: '/results',
      templateUrl: 'templates/results.html',
      controller: 'selectingController'
    });
  $urlRouterProvider.otherwise('/selecting');
  })
  .controller('selectingController', function ($scope) {
    $scope.data = 'ASDASDS';
    $scope.send = function () {

    }
    $scope.setValue = function (value) {
      $scope.value = value;
    }
  })
