const mongoose = require('mongoose');

const postSchema = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

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
        required: false, 
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

const Post = mongoose.model('Postagens', postSchema);

module.exports = Post;