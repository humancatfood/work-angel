(function (angular) {

  'use strict';

  var app = angular.module('app');

  app.controller('WalletCtrl', function ($scope, TransactionsService) {

    $scope.addMoney = TransactionsService.addMoney;
    $scope.removeMoney = TransactionsService.removeMoney;


    init();


    function init ()
    {
      $scope.newTransaction = 0;
      $scope.transactions = TransactionsService.getTransactions();
    }

  });

}(window.angular));
