define(['app', '../services/langAPI'], function (app) {
  app.controller('ForTestPage', ['$scope', 'langApi', 'localStorageService', '$rootScope',
    function ($scope, langApi, localStorageService, $rootScope) {

        var defLang = 'eng';
        var globLang = {};
        var langState = localStorageService.get('langState');

        $scope.langState = (langState === null) ? defLang : langState;
        $rootScope.t = {};

        function createLangScope(arr, lang, callback) {
          var len = arr.length,
              obj = {},
              i = 0;

            for (i; i < len; i++) {
              obj[arr[i].machineName] = arr[i][lang];
            }
          callback(obj, lang, null);
        };

        function displayTranslations(obj, lang, arr) {
          if (!globLang.hasOwnProperty(lang)) {

            if (obj) {
              globLang[lang] = obj;
              $rootScope.t = obj;
            } else {
              createLangScope(arr, lang, displayTranslations);
            }

          } else {
            $rootScope.t = globLang[lang];
          }
        };

        langApi.getJSONresponse('languages').then(function(data) {
          $scope.dataLanguages = data;
        });

        langApi.getJSONresponse('translates').then(function(data) {
          $scope.dataTranslates = data;
          displayTranslations(null, $scope.langState, data);
        });

        $scope.radio = {
          model: $scope.langState
        };

        $scope.setLanguage = function(lang) {
          displayTranslations(null, lang, $scope.dataTranslates);
          localStorageService.set('langState', lang);
        }

  }]);
});