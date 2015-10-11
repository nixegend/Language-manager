define(['app'], function (app) {
    app.controller('LanguageCtrl', ['$scope', '$timeout', '$location', '$window', '$rootScope',
        function ($scope, $timeout, $location, $window, $rootScope) {

        $scope.language = {};
        var oldValue = {};

        $scope.lgRowActions = {
          remove : function(index) {
            $scope.languagesData.splice(index, 1);
          },
          add : function(language) {
            $scope.languagesData.push(language);
            $scope.language = {};
          },
          done : function(row, index) {
            // console.log(r);
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