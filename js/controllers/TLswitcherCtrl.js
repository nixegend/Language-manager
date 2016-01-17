define(['app'], function (app) {
    app.controller('TLswitcherCtrl', ['$scope', '$rootScope', 'localStorageService',
        function ($scope, $rootScope, localStorageService) {

            $scope.devMod = function () {
                $rootScope.lmSettings.devMod = !$rootScope.lmSettings.devMod;
                localStorageService.set('lm', $rootScope.lmSettings);
            };

            $scope.activateLanguage = function (lang) {
                lang.active = !lang.active;
            };

        }]);
});