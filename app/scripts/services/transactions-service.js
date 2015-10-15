(function (angular) {

  'use strict';

  var app = angular.module('app');

  app.factory('TransactionsService', function ($rootScope) {

    var transactions;

    var service = {
      getTransactions: getTransactions,
      init: init
    };


    function init () {
      transactions = [];
    }


    function getTransactions () {

      return transactions;

    }


    $rootScope.$on('RESET', init);

    return service;

  });

}(window.angular));
