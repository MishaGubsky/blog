angular.module('project', [
    'ngResource',
    'ngRoute',
    'templates',
    'Devise',
    "ui.bootstrap"
])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            })
            .when('/post/new', {
                templateUrl: 'postForm.html',
                controller: 'PostCtrl'
            })
            .when('/post/:id', {
                templateUrl: 'post.html',
                controller: 'PostCtrl'
            })
            .when('/login', {
                templateUrl: 'login.html',
                controller: 'UserCtrl'
            })
            .when('/registration', {
                templateUrl: 'registration.html',
                controller: 'UserCtrl'
            })
            .when('/heading/new', {
                templateUrl: 'headingForm.html',
                controller: 'HeadCtrl'
            });
    });

