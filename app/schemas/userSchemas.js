const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    nickName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    phoneNumber:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    birthDayData:{
        type: String,
    },
    insertAt: {
        type: Date,
        default: () => new Date(),
        require: false
    },
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }]
});

const Usuario = mongoose.model('User', userSchema)

module.exports = Usuario;