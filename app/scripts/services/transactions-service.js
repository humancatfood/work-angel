(function (angular) {

  'use strict';

  var app = angular.module('app');

  app.factory('TransactionsService', function ($rootScope) {

    var transactions;
    var total;
    var runningId;

    var service = {
      getTransactions: getTransactions,
      getTotal: getTotal,
      addMoney: addMoney,
      removeMoney: removeMoney,
      init: init
    };


    function init () {
      transactions = [];
      total = 0;
      runningId = 0;
    }


    function getTransactions () {

      return transactions;

    }


    function getTotal () {
      return total;
    }


    function addTransaction (amount) {

      total += amount;
      runningId += 1;

      transactions.push({
        id: runningId,
        date: (+new Date()),
        in: Math.max(amount, 0),
        out: Math.min(amount, 0),
        runningTotal: total
      });

      return total;
    }


    function addMoney (amount) {
      return addTransaction(amount);
    }


    function removeMoney (amount) {
      return addTransaction(-amount);
    }

    $rootScope.$on('RESET', init);

    return service;

  });

}(window.angular));
