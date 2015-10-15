(function (angular) {

  'use strict';

  var app = angular.module('app');

  app .directive('selectOnFocus', function () {
    return {
      restrict: 'A',
      link: function (scope, element) {
        element.on('click', function () {
          this.setSelectionRange(0, this.value.length);
        });
      }
    };
  });


}(window.angular));
