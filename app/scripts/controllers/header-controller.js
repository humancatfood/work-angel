(function (angular) {

  'use strict';

  var app = angular.module('app');

  app.controller('HeaderCtrl', function ($scope, $rootScope) {

    $scope.reset = function () {
      $rootScope.$broadcast('RESET');
    };

  });

}(window.angular));
