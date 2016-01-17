define(['../app', '../controllers/LanguageCtrl'], function (app) {

    app.directive('languageManager', [function () {
        return {
            restrict: 'E',
            replace: true,
            controller: 'LanguageCtrl',
            templateUrl: '/partials/language-manager.html',
            link: function (scope, element, attr) {

            }
        };
    }]);

});