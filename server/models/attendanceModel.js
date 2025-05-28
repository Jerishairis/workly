const mongoose = require('mongoose')

const Schema = mongoose.Schema

const attendanceSchema = new Schema({
    attendance_id: {
        type: String,
        required: true,
        unique: true
    },
    user_id: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    check_in_time: {
        type: Date,
        required: true
    },
    check_out_time: {
        type: Date,
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model('Attendance', attendanceSchema)