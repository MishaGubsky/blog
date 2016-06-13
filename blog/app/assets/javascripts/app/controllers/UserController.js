angular.module('project')
    .controller('UserCtrl', [
        '$scope',
        '$location',
        'Auth',
        function ($scope, $location, Auth) {
            $scope.submitLogin = function () {
                var credentials = $scope.loginForm;
                var config = {
                    headers: {
                        'X-HTTP-Method-Override': 'POST'
                    }
                };

                Auth.login(credentials, config).then(function (user) {
                    console.log(user); // => {id: 1, ect: '...'}
                    $location.path('/');
                }, function (error) {
                    // Authentication failed...
                });
            };

            $scope.register = function () {
                var credentials = $scope.registrationForm;
                var config = {
                    headers: {
                        'X-HTTP-Method-Override': 'POST'
                    }
                };

                Auth.register(credentials, config).then(function(registeredUser) {
                    console.log(registeredUser); // => {id: 1, ect: '...'}
                    $location.path('/');
                }, function(error) {
                    console.log(error);
                    // Registration failed...
                });
            }
        }]);