(function () {
'use strict';

  angular
    .module('app.home')
    .component('home', {
      templateUrl: 'app/home/home.html',
      controller: homeController,
      controllerAs: 'vm',
      bindings: {
        someObj: '<',
      },
    });

  /* @ngInject */
  function homeController($state,
    $log,
    $timeout,
    authenticationService) {
    var vm = this;
    vm.title = 'homeController';
    vm.isItemActive = isItemActive;
    vm.hasChildActive = hasChildActive;
    vm.logout = logout;
    // vm.someObj: get from bindings

      $log.info(vm.someObj);
    $timeout(function () {
      $log.info(vm.someObj);
    }, 1000);

    ////////////////

    function logout() {
      $state.go('login');
      authenticationService.logout();
    }

    function isItemActive(srefName) {
      if ($state.is(srefName)) {
        return true;
      } else {
        return false;
      }
    }

    function hasChildActive(items) {
      if (angular.isArray(items)) {
        var currentSrefName = $state.$current.name;
        for(var i = 0; i < items.length; i++) {
          if(items[i].name === currentSrefName) {
            return true;
          }
        }
        return false;
      } else {
        return false;
      }
    }

  }

}());
