define(['../app',
    '../directives/tl-switcher',
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

            function getTdWidth(o) {
                var propLength = langApi.getPropNums(o);
                var tds = ($rootScope.lmSettings.devMod) ? propLength : propLength - 1;
                return 90 / tds;
            };

            $rootScope.$on('tdSizeWatcher', function () {
                $scope.tdWidth = getTdWidth($scope.translatesData[0]);
            });

            $scope.switchTables = function () {
                $rootScope.lmSettings.tlState = !$rootScope.lmSettings.tlState;
                localStorageService.set('lm', $rootScope.lmSettings);
            };

            langApi.getJSONresponse('languages').then(function (data) {
                $scope.languagesData = data;
            });

            langApi.getJSONresponse('translates').then(function (data) {
                $scope.translatesData = data;
                $scope.tdWidth = getTdWidth(data[0]);
            });

        }]);
});