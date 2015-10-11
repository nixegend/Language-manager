define(['app',
    '../directives/tlSwitcher',
    '../directives/languageManager',
    '../directives/translationManager',
    '../services/langAPI'
    ], function (app) {
  app.controller('TLmanagerCtrl', ['$scope', 'langApi', function ($scope, langApi) {

        $scope.tlStateManager = true;

        $scope.$on('tlStateManager', function (event, state) {
          $scope.tlStateManager = state; // state from TLswitcherCtrl
        });

        langApi.getJSONresponse('languages').then(function(data) {
          $scope.languagesData = data;
        });

        langApi.getJSONresponse('translates').then(function(data) {
          $scope.translatesData = data;
        });

  }]);
});