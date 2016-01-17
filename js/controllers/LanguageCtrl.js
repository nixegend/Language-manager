define(['app'], function (app) {
    app.controller('LanguageCtrl', ['$scope', function ($scope) {

        var oldValue = {};

        $scope.lgRowActions = {
            remove: function (index) {
                $scope.languagesData.splice(index, 1);
            },
            add: function (language) {
                // if machine name does not exist => add it
                if (!language.hasOwnProperty('machineName'))
                    language['machineName'] = language.btnName.toLowerCase();

                // if language name does not exist => add it
                if (!language.hasOwnProperty('langName'))
                    language['langName'] = language.btnName;

                language['active'] = false;
                $scope.languagesData.push(language);
            },
            done: function (row, index) {
                // console.log(row);
            },
            edit: function (row, index) {
                oldValue[row.uniqueID] = angular.copy(row);
            },
            cancel: function (row, index) {
                $scope.translatesData[index] = oldValue[row.uniqueID];
            }
        };

    }]);
});