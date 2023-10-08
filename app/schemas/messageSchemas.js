    const mongoose = require('mongoose')

    const messaSchema = mongoose.Schema({
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },

        recipientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },

        content: {
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

    const Message = mongoose.model('Message', messaSchema);

    module.exports = Message