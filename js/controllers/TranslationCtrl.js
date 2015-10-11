define(['app'], function (app) {
    app.controller('TranslationCtrl', ['$scope', '$timeout', '$location', '$window', '$rootScope',
        function ($scope, $timeout, $location, $window, $rootScope) {

        $scope.translates = {};
        var oldValue = {};

        $scope.trRowActions = {
          remove : function(index) {
            $scope.translatesData.splice(index, 1);
          },
          add : function(translates) {
            $scope.translatesData.push(translates);
            $scope.translates = {};
          },
          done : function(row, index) {

          },
          edit : function(row, index) {
            oldValue[row.uniqueID] = angular.copy(row);
          },
          cancel : function(row, index) {
            $scope.translatesData[index] = oldValue[row.uniqueID];
          }
        };

  }]);
});