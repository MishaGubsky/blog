angular.module('project', [
    'ngResource',
    'ngRoute',
    'templates'
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
            });
    });

