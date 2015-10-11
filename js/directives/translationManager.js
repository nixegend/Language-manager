define(['app', '../controllers/TranslationCtrl'], function (app) {

    app.directive('translationManager', [function () {
        return {
            restrict: 'E',
            replace: true,
            controller: 'TranslationCtrl',
            templateUrl: '/partials/translation-manager.html'
        };
    }]);

});