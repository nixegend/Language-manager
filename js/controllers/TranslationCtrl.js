define(['app'], function (app) {
    app.controller('TranslationCtrl', ['$scope', function ($scope) {

      var oldValue = {};

      $scope.trRowActions = {
        remove : function(index) {
          $scope.translatesData.splice(index, 1);
        },
        add : function(translates) {
          $scope.translatesData.push(translates);
        },
        done : function(row, index) {
          // console.log(row);
        },
        edit : function(row, index) {
          oldValue[row.machineName] = angular.copy(row);
        },
        cancel : function(row, index) {
          $scope.translatesData[index] = oldValue[row.machineName];
        }
      };

  }]);
});