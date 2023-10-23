const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nickName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
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
    Nfollowers: {
        type: String,
        require: false,
    },
    Nfollowing: {
        type: String,
        require: false,
    },
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }]
});

const Usuario = mongoose.model('User', userSchema);

module.exports = Usuario;
