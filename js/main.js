require(['config'], function() {
	require([
		'angular',
		'./app',
		'./controllers/TLmanagerCtrl',
		'./controllers/ForTestPage'
	], function(angular, app) {
		app.config(['$routeProvider', 'localStorageServiceProvider', function ($routeProvider, localStorageServiceProvider) {
			localStorageServiceProvider
			.setPrefix('langManager')
			.setStorageType('localStorage');

			$routeProvider.otherwise({
    			redirectTo: '/language-manager'
			})
			.when('/language-manager', {
				templateUrl: '/partials/tl-manager.html',
				controller: 'TLmanagerCtrl'
			})
			.when('/language-manager/test', {
				templateUrl: '/partials/test.html',
				controller: 'ForTestPage'
			});
		}]);
		angular.element(document).ready(function() {
			angular.bootstrap(document, ['languagesManager']);
		});
	});
});