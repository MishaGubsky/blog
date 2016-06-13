angular.module('project')
    .controller('PostCtrl', [
        '$scope',
        '$location',
        '$routeParams',
        'factory',
        'Auth',
        function ($scope, $location, $routeParams, factory, Auth) {
            $scope.user = Auth._currentUser;
            if ($routeParams.id)
                $scope.post = factory.posts.getPost($routeParams.id);
            $scope.headings = factory.headings.query();
            $scope.addComment = function () {
                if ($scope.comment_body !== '' && $scope.comment_body.replace(' ', '') !== '') {
                    factory.posts.addComment(
                        $scope.post.id,
                        {'body': $scope.comment_body},
                        function (response) {
                            $scope.post.comments.push(response);
                        });
                    $scope.comment_body = '';
                }
            };
            $scope.newPost = function () {
                if ($scope.postName && $scope.postName !== '' && $scope.postName.replace(' ', '') !== '') {
                    var radios = document.getElementsByClassName('radioButtons');
                    var selectedHeadings = [];
                    for (var i=0, len = radios.length; i < len; i++){
                        if (radios[i].checked) {
                            selectedHeadings.push(radios[i].value);
                        }
                    }
                    // console.log(selectedHeadings);
                    factory.posts.save({
                        'headings': selectedHeadings,
                        'name': $scope.postName,
                        'body': $scope.postBody
                    }, function (post) {
                        $location.path('/post/'+post.id);
                    })
                }
            };
        }]);