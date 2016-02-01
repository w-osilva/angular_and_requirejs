define(['../application'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/views/home.html',
            controller: 'homeCtrl'
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }]);
});