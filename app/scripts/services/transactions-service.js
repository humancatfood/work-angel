(function (angular) {

  'use strict';

  var app = angular.module('app');

  app.factory('TransactionsService', function ($rootScope, $window, $q, $log) {

    var storageKey = 'WALLET';

    var service = {
      getWallet: getWallet,
      addMoney: addMoney,
      removeMoney: removeMoney
    };


    function getWallet ()
    {

      var wallet;

      try
      {
        var jsonWallet = $window.localStorage.getItem(storageKey);
        wallet = JSON.parse(jsonWallet);
      }
      catch (error)
      {
        $log.error(error);
        wallet = null;
      }

      if (!wallet ||
          !angular.isObject(wallet) ||
          !angular.isArray(wallet.transactions) ||
          !angular.isNumber(wallet.total))
      {
        wallet = {
          transactions: [],
          total: 0
        };
      }

      return $q.when(wallet);

    }

    function saveWallet (wallet)
    {

      try
      {
        var jsonWallet = JSON.stringify(wallet);
        $window.localStorage.setItem(storageKey, jsonWallet);
      }
      catch (error)
      {
        $log.error(error);
        wallet = {
          transactions: [],
          total: 0
        };
      }

      return $q.when(wallet);

    }


    function addTransaction (amount)
    {

      return getWallet().then(function (wallet) {

        if (amount < -wallet.total)
        {
          return $q.reject('Insufficient funds');
        }

        wallet.total += amount;

        wallet.transactions.push({
          id: wallet.transactions.length + 1,
          date: (+new Date()),
          in: Math.max(amount, 0),
          out: Math.min(amount, 0),
          runningTotal: wallet.total
        });

        return saveWallet(wallet).then(function (wallet) {
          return wallet;
        }, function (error) {
          return $q.reject('could not store wallet: ' + error);
        });

      });

    }


    function addMoney (amount)
    {
      return addTransaction(amount);
    }


    function removeMoney (amount)
    {
      return addTransaction(-amount);
    }


    $rootScope.$on('RESET', function () {
      $window.localStorage.removeItem(storageKey);
    });


    return service;

  });

}(window.angular));
