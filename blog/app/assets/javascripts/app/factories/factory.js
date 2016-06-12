angular.module('project')
    .factory('factory', [
        '$resource', function ($resource) {
            var factory = {};
            var post = $resource('/posts.json');
            var comment = $resource('/posts/:post_id/comments.json');
            var heading = $resource('/headings.json');

            post.getPost = function (postId) {
                return $resource('/posts/' + postId + '.json').get({id: postId})
            };
            post.addComment = function (postId, newComment) {
                return comment.save({post_id: postId}, newComment, function (response) {
                }, function (error) {
                    console.log(error);
                });
            };

            factory.headings = heading;
            factory.posts = post;
            factory.comments = comment;
            return factory
        }
    ]);