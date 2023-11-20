const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    nickName: {
        type: String,
        required: true,
        index: true,
    },

    userName: {
        type: String,
        required: true,
        index: true,
    },

    phoneNumber: {
        type: String,
        required: false, // Tornar este campo não obrigatório
    },

    email: {
        type: String,
        required: false, // Tornar este campo não obrigatório
    },

    password: {
        type: String,
        required: true,
    },

    nacionality: {
        type: String,
        require: true,
    },

    birthDayData: {
        type: String,
    },
    insertAt: {
        type: Date,
        default: () => new Date(),
        require: false,
    },

    type: {
        type: String,
        require: false,
    },

    avatar: {
        filename: String,
        contentType: String,
        image: Buffer,
    },

    bio: {
        type: String,
        require: false,
        default: '',
    },

    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
    }],

    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],

    Nfollowing: {
        type: Number,
        default: 0,
    },

    Nfollowers: {
        type: Number,
        default: 0,
    },

    showEmail: {
        type: Boolean,
        default: true,
    },

    showBirthDayData: {
        type: Boolean,
        default: true,
    },

    showNacionality: {
        type: Boolean,
        default: true,
    },

    showPhoneNumber: {
        type: Boolean,
        default: true,
    },
});

const Usuario = mongoose.model('User', userSchema);

module.exports = Usuario;