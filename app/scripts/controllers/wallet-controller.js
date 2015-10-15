(function (angular) {

  'use strict';

  var app = angular.module('app');

  app.controller('WalletCtrl', function ($scope, TransactionsService) {

    $scope.addMoney = addMoney;
    $scope.removeMoney = removeMoney;


    init();


    function init ()
    {
      $scope.newTransaction = 0;
      $scope.transactions = TransactionsService.getTransactions();
      $scope.total = TransactionsService.getTotal();
    }


    function addMoney (amount) {
      $scope.total = TransactionsService.addMoney(amount);
    }


    function removeMoney (amount) {
      $scope.total = TransactionsService.removeMoney(amount);
    }

  });

}(window.angular));
