Ext.define('MyClassic.model.Comment',{
    extend: 'Ext.data.Model',
    requires: ['MyClassic.model.Post'],
    requires: ['MyClassic.model.Post'],

    fields: [
        {
            name: 'postId', 
            reference: 'Post', 
            type: 'int'
        },
        'id', 'name', 'body'
        
    ],
    proxy:{
        type: 'rest',
        url: 'http://localhost:3000/posts',
        reader: {
            type: 'json',
        }
    },
    validators:{
        name: [ { type: 'length', min: 7 }],
    }


// },function () {
//     MyClassic.model.Post.load(1, {
//         callback: function (post) {
//             post.comments(function (comments){
//                 comments.each(function(comment){
//                     console.log('Comment: '+comment.get('name') + 'commentId '+ comment.get("id"));
//                 });
//             });
//         }
//     });

//     MyClassic.model.Comment.load(1, {
//         callback: function (comment) {
//             comment.getPost(function (post) {
//                 console.log('Got post from comment: ' + post.get('title'));
//             });
//         }
//     });
 }
)