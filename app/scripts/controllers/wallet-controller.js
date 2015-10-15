(function (angular) {

  'use strict';

  var app = angular.module('app');

  app.controller('WalletCtrl', function ($scope, TransactionsService) {

    init();

    function init ()
    {
      $scope.newTransactionValue = 0.00;
      $scope.transactions = TransactionsService.getTransactions();
    }

  });

}(window.angular));
