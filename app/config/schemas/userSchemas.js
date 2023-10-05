const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: {
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
    age:{
        type: String,
        required: true,
    },
    phoneNumber:{
        type: String,
        required: true,
    },
    insertAt: {
        type: Date,
        default: () => new Date(),
        require: false
    },
});

module.exports = userSchema;