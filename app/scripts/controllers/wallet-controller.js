(function (angular) {

  'use strict';

  var app = angular.module('app');

  app.controller('WalletCtrl', function ($scope, $timeout, $log, TransactionsService) {

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
        });

    }


    function addMoney (amount) {
      $scope.loading = true;
      TransactionsService.addMoney(amount)
        .then(update, handleError)
        .finally(function () {
          $scope.loading = false;
        });
    }


    function removeMoney (amount) {
      $scope.loading = true;
      TransactionsService.removeMoney(amount)
        .then(update, handleError)
        .finally(function () {
          $scope.loading = false;
        });
    }

    function update (wallet) {
      $scope.transactions = wallet.transactions;
      $scope.total = wallet.total;
    }

    function handleError (error) {
      $log.error(error);
    }

  });

}(window.angular));
