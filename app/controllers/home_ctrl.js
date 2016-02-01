define(['./module'], function (app) {

    app.controller('homeCtrl', function ($scope, clock, $interval) {
        $scope.title = "Home";

        $scope.sayHello = function() {
            alert('Hello!!!');
        };

        $interval(function() {
            $scope.timeNow = clock.getHours()+':'+clock.getMinutes()+':'+clock.getSeconds();
        }, 1000);
    });

});