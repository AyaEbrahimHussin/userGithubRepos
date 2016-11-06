'use strict';

/**
 * @ngdoc overview
 * @name goEuroTaskApp
 * @description
 * # goEuroTaskApp
 *
 * Main module of the application.
 */
var goEuroTaskApp = angular
  .module('goEuroTaskApp', [
    'angular-loading-bar',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/enterName', {
        templateUrl: 'views/enterName.html',
        controller: 'enterName',
        controllerAs: 'enterName'
      })
      .when('/repos/:userName', {
        templateUrl: 'views/repos.html',
        controller: 'repos',
        controllerAs: 'repos'
      })
      .otherwise({
        redirectTo: '/enterName'
      });
  });
