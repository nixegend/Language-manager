define(['app'], function (app) {
  app.controller('TLswitcherCtrl', ['$scope', '$rootScope', 'localStorageService',
    function ($scope, $rootScope, localStorageService) {

        var devModval = localStorageService.get('devMod');

        $scope.devModState = (devModval === null) ? false : devModval;
        $rootScope.tlStateManager = true;

        $scope.devMod = function(state) {
            $scope.devModState = !state;
            localStorageService.set('devMod', !state);
        };

        $scope.activateLanguage = function(lang) {
            lang.active = !lang.active;
        }

        $scope.switchTables = function(state) {
            $rootScope.tlStateManager = !state;
            $scope.$emit('tlStateManager', state);
        };

  }]);
});