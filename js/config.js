require.config({
	paths: {
		'ngLocalStorage': 	'../libs/angular-local-storage.min',
		'uiBootstrap': 		'../libs/angular-bootstrap.min',
		'ngResource': 		'../libs/angular-resource.min',
		'ngAnimate': 		'../libs/angular-animate.min',
		'bootstrap':		'../libs/bootstrap.min',
		'ngRoute': 			'../libs/angular-route.min',
		'uiRouter': 		'../libs/angular-ui-router.min',
		'angular':			'../libs/angular.min',
		'async':			'../libs/async.min',
		'jquery' : 			'../libs/jquery.min',
		'lodash' : 			'../libs/lodash.min'
	},
	shim: {
		'lodash': {
			exports: '_'
		},
		'angular': {
			exports: 'angular'
		},
		'ngRoute': {
			deps: ['angular']
		},
		'ngLocalStorage': {
			deps: ['angular']
		},
		'bootstrap': {
			deps: ['jquery']
		},
		'uiRouter': {
			deps: ['angular']
		},
		'uiBootstrap': {
			deps: ['angular']
		},
		'ngAnimate': {
			deps: ['angular']
		},
		'ngResource': {
			deps: ['angular']
		}
	}
});