(function (angular, $) {

  'use strict';

  var app = angular.module('app');

  app.controller('WalletCtrl', function ($scope, $rootScope, $timeout, $log, TransactionsService) {

    $scope.addMoney = addMoney;
    $scope.removeMoney = removeMoney;


    init();


    function init ()
    {

      $scope.newTransaction = 0;
      $scope.loading = true;

      TransactionsService.getWallet()
        .then(update, handleError)
        .finally(function () {
          $scope.loading = false;
          clear();
        });

    }


    function addMoney (amount)
    {
      $scope.loading = true;
      TransactionsService.addMoney(amount)
        .then(update, handleError)
        .finally(function () {
          $scope.loading = false;
          clear();
        });
    }


    function removeMoney (amount)
    {
      $scope.loading = true;
      TransactionsService.removeMoney(amount)
        .then(update, handleError)
        .finally(function () {
          $scope.loading = false;
          clear();
        });
    }


    function update (wallet)
    {
      $scope.transactions = wallet.transactions;
      $scope.total = wallet.total;
    }


    function handleError (error)
    {
      $log.error(error);
    }


    function clear ()
    {
      $timeout(function () {
        $scope.newTransaction = 0;
        $('#wallet-input').focus();
      }, 100);
    }


    $rootScope.$on('RESET', function () {
      $timeout(init, 0);
    });

  });

}(window.angular, window.jQuery));
