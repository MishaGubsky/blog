angular.module('project')
    .controller('HomeCtrl', [
        '$scope',
        '$location',
        'factory',
        'Auth',
        function ($scope, $location, factory, Auth) {
            $scope.user = Auth._currentUser;
            $scope.posts = factory.posts.query();
            $scope.selectPost = function (id) {
                $location.path('/post/'+id);
            };
        }]);