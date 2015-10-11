define([
	'angular',
	'ngRoute',
    'ngAnimate',
    'uiBootstrap',
    'ngLocalStorage'
	],	function(angular) {
	return angular.module('languagesManager', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'LocalStorageModule']);
});