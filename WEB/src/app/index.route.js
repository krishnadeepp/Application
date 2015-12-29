(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).state('CreateForm', {
        url: '/form',
        templateUrl: 'app/Form/Form.html',
        controller: 'FormController',
        controllerAs: 'Form'
      }).state('pages/ICDCode', {
        url: '/',
        templateUrl: 'app/pages/ICDCode/ICDCode.html',
        controller: 'ICDCodeController as icdctrl'
        //controllerAs: 'ICDCodeCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
