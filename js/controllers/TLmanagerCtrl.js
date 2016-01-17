define(['../app',
    '../directives/tl-switcher',
    '../directives/td-set-sizer',
    '../directives/language-manager',
    '../directives/translation-manager',
    '../services/API'
], function (app) {
    app.controller('TLmanagerCtrl', ['$scope', 'langApi', '$rootScope', 'localStorageService',
        function ($scope, langApi, $rootScope, localStorageService) {

            if (!localStorageService.get('lm')) {
                var settings = {
                    tlState: true,
                    devMod: false
                };

                localStorageService.set('lm', settings);
                $rootScope.lmSettings = settings;
            } else {
                $rootScope.lmSettings = localStorageService.get('lm');
            };
            
            

            $scope.switchTables = function () {
                $rootScope.lmSettings.tlState = !$rootScope.lmSettings.tlState;
                localStorageService.set('lm', $rootScope.lmSettings);
            };

            langApi.getJSONresponse('languages').then(function (data) {
                $scope.languagesData = data;
            });

            langApi.getJSONresponse('translates').then(function (data) {
                $scope.translatesData = data;
            });

        }]);
});