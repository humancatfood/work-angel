(function (angular) {

  'use strict';

  var app = angular.module('app', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize'
  ]);


  app.config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/wallet.html',
        controller: 'WalletCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });


  app.run(function (TransactionsService) {
    TransactionsService.init();
  });

}(window.angular));
