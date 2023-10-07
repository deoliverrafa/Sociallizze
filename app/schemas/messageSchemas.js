const mongoose = require('mongoose')

const messaSchema = mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    contente: {
        type: String,
        required: true
    },

    timeStamp: {
        type: Date,
        default: Date.now
    },

    expiration: {
        type: Date,
        default: null
    }
})