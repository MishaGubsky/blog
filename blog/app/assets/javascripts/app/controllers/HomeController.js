angular.module('project')
    .controller('HomeCtrl', [
        '$scope',
        '$location',
        'factory',
        function ($scope, $location, factory) {
            $scope.posts = factory.posts.query();
            $scope.selectPost = function (id) {
                $location.path('/post/'+id);
            };
        }]);