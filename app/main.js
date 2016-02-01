require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        'angular': '../bower_components/angular/angular',
        'angular-route': '../bower_components/angular-route/angular-route',
        'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
        'angular-resource': '../bower_components/angular-resource/angular-resource',
        'ng-module': '../bower_components/ng-module/ng-module',
        'jquery': '../bower_components/jquery/dist/jquery',
        'domReady': '../bower_components/requirejs-domready/domReady'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-sanitize': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'ng-module': {
            deps: ['angular']
        }
    },
    deps: ['./bootstrap']
});