define([
    'require',
    'angular',
    'application',
    'config/routes'
], function (require, ng) {
    'use strict';

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['MyApp']);
    });
});