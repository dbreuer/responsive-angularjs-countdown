'use strict';

/**
 * @ngdoc function
 * @name anitaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the anitaApp
 */
angular.module('anitaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
