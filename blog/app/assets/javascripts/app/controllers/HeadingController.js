angular.module('project')
    .controller('HeadCtrl', [
        '$scope',
        '$location',
        'factory',
        'Auth',
        function ($scope, $location, factory, Auth) {
            $scope.user = Auth._currentUser;
            $scope.newHeading = function () {
                if ($scope.Title !== '' && $scope.Title.replace(' ', '') !== '') {

                    factory.headings.save({
                        'title': $scope.Title
                    }, function () {
                        $location.path('/');
                    })
                }
            };
        }]);