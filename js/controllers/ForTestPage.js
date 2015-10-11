define(['app', '../services/langAPI'], function (app) {
  app.controller('ForTestPage', ['$scope', 'langApi', 'localStorageService', '$rootScope',
    function ($scope, langApi, localStorageService, $rootScope) {

        var defLang = 'eng';
        var langState = localStorageService.get('langState');

        $scope.langState = (langState === null) ? defLang : langState;
        $rootScope.t = {};

        function createLangScope(arr, lang) {
          var len = arr.length, i = 0;
          for (i; i < len; i++) {
            $rootScope.t[arr[i].machineName] = arr[i][lang];
          }
        };

        langApi.getJSONresponse('languages').then(function(data) {
          $scope.dataLanguages = data;
        });

        langApi.getJSONresponse('translates').then(function(data) {
          $scope.dataTranslates = data;
          createLangScope(data, $scope.langState);
        });

        $scope.radio = {
          model: $scope.langState
        };

        $scope.setLanguage = function(lang) {
          createLangScope($scope.dataTranslates, lang);
          localStorageService.set('langState', lang);
        }

  }]);
});