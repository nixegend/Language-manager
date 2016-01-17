define(['../app'], function (app) {
    app.directive('tdSetSizer', ['$timeout', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                // if (scope.$last === true) {
                //     $timeout(function () {
                //         scope.$emit('ngRepeatRows');
                //     });
                // }

                console.log(element);

            }
        }
    }]);
});