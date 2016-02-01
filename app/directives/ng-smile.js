define(['./module'], function (directives) {
    'use strict';
    directives.directive('ngSmile', function () {
        var directive = {};

        directive.restrict = 'E';
        directive.templateUrl = 'app/directives/templates/ng-smile.html';
        directive.replace = true;
        directive.scope = {};
        directive.link = function(scope, element, attrs){
            scope.imageUrl = 'https://yt3.ggpht.com/-yQQzcLH32yo/AAAAAAAAAAI/AAAAAAAAAAA/t-ajQts0oQY/s100-c-k-no/photo.jpg';
        };

        return directive;
    });
});