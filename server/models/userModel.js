const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        unique: true,
        required: true},
    email: {
        type: String,
        required: true
    },
    password_hash: {
        type: String,
        required: true
    }, //double check
    role_id: {
        type: String,
        required: true
    }, //double check
    is_active: Boolean,
    required: true
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema);