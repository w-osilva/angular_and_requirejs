define([
    'angular',
    'angular-route',
    'angular-resource',
    'angular-sanitize',
    'controllers/index',
    'directives/index',
    'filters/index',
    'services/index'

], function (angular) {
    'use strict';

    return angular.module('MyApp', [
        'app.controllers',
        'app.directives',
        'app.filters',
        'app.services',
        'ngRoute'
    ]);
});