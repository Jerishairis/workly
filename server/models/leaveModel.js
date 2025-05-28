const mongoose = require('mongoose')
const {v4: uuidv4} = require('uuid')
const Schema = mongoose.Schema

const leaveSchema = new Schema({
    leave_id: {
        type: String,
        default: uuidv4,
        unique: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    reason: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Leave', leaveSchema)