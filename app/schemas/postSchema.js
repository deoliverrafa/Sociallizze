const mongoose = require('mongoose');

const postSchema = mongoose.Schema({

    title: {
        type: String,
        required: true,
    },

    desc: {
        type: String,
        required: true,
    },

    images: [{
        image: Buffer,
        fileName: String,
        contentType: String,  
    }],

    likes:{
        type: Number,
        default: 0,
    },

    usersLiked: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;