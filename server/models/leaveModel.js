const mongoose = require('mongoose')

const Schema = mongoose.Schema

const leaveSchema = new Schema({
    leave_id: {
        type: String,
        required: true,
        unique: true
    },
    user_id: {
        type: String,
        required: true,
        unique: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    statue: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Leave', leaveSchema)