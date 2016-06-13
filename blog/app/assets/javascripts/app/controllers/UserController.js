angular.module('project')
    .controller('UserCtrl', [
        '$scope',
        '$location',
        'Auth',
        function ($scope, $location, Auth) {
            $scope.user = Auth._currentUser;
            var config = {
                headers: {
                    'X-HTTP-Method-Override': 'POST'
                }
            };
            $scope.submitLogin = function () {
                var credentials = $scope.loginForm;

                Auth.login(credentials, config).then(function (user) {
                    console.log(user);
                    $location.path('/');
                }, function (error) {
                });
            };

            $scope.register = function () {
                var credentials = $scope.registrationForm;

                Auth.register(credentials, config).then(function(registeredUser) {
                    console.log(registeredUser); // => {id: 1, ect: '...'}
                    $location.path('/');
                }, function(error) {
                    console.log(error);
                });
            };

            $scope.signOut = function () {
                var config = {
                    headers: {
                        'X-HTTP-Method-Override': 'DELETE'
                    }
                };
                Auth.logout(config).then(function() {
                    $location.path('/');
                });

            }
        }]);