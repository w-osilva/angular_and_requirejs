define(['./module'], function (services) {
    'use strict';
    services.service('clock', function(){
        this.getHours = function() {
            return (new Date()).getHours();
        };

        this.getMinutes = function() {
            return (new Date()).getMinutes();
        };

        this.getSeconds = function() {
            return (new Date()).getSeconds();
        };
    });
});