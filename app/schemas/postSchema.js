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

    image1: {
        image: Buffer,
        fileName: String,
        contentType: String,
 
    },
    image2: {
        image: Buffer,
        fileName: String,
        contentType: String,
 
    },
    image3: {
        image: Buffer,
        fileName: String,
        contentType: String,
 
    },
    image4: {
        image: Buffer,
        fileName: String,
        contentType: String,
 
    },

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