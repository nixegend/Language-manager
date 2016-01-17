define(['app', '../controllers/TLswitcherCtrl'], function (app) {

    app.directive('tlSwitcher', [function () {
        return {
            restrict: 'E',
            replace: true,
            controller: 'TLswitcherCtrl',
            templateUrl: '/partials/tl-switcher.html'
        };
    }]);

});