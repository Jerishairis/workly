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
        required: true,
        unique: true
    },
    password_hash: {
        type: String,
        required: true
    },
    role_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    },
    company_id: {
        type: String,
        required: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    last_login: {
        type: Date,
    },
    email_verified: {
        type: Boolean,
        default: false
    },
    required: true
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema);