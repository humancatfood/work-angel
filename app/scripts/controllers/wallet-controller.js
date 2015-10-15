(function (angular) {

  'use strict';

  var app = angular.module('app');

  app.controller('WalletCtrl', function ($scope, TransactionsService) {

    init();

    function init ()
    {
      $scope.newTransaction = 0;;
      $scope.transactions = TransactionsService.getTransactions();
    }

  });

}(window.angular));
