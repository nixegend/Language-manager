define(['app'], function (app) {
  app.controller('TLswitcherCtrl', ['$scope', '$timeout', '$location', '$window', '$rootScope', 'localStorageService',
    function ($scope, $timeout, $location, $window, $rootScope, localStorageService) {

        var devModval = localStorageService.get('devMod');

        $scope.devModState = (devModval === null) ? false : devModval;
        $rootScope.tlStateManager = true;

        $scope.devMod = function(state) {
            $scope.devModState = !state;
            localStorageService.set('devMod', !state);
        };

        $scope.switchTables = function(state) {
            $rootScope.tlStateManager = !state;
            $scope.$emit('tlStateManager', state);
        };

  }]);
});