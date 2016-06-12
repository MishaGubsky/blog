angular.module('project')
    .controller('PostCtrl', [
        '$scope',
        '$location',
        '$routeParams',
        'factory',
        function ($scope, $location, $routeParams, factory) {
            if ($routeParams.id)
                $scope.post = factory.posts.getPost($routeParams.id);
            $scope.headings = factory.headings.query();
            $scope.addComment = function () {
                if ($scope.comment_body !== '' && $scope.comment_body.replace(' ', '') !== '') {
                    factory.posts.addComment($scope.post.id, {'body': $scope.comment_body});
                    $scope.comment_body = '';
                }
            };
            $scope.newPost = function () {
                console.log($scope.postBody);
                console.log($scope.selectedHeading);
                if ($scope.postName !== '' && $scope.postName.replace(' ', '') !== '') {

                    factory.posts.save({
                        'headings': $scope.selectedHeading,
                        'name': $scope.postName,
                        'body': $scope.postBody
                    })
                }
            };
        }]);