const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AttendanceSchema = new Schema ({
    company_name: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    created_at: Date
}, {timestamps: true})

module.exports = mongoose.model('Attendance', AttendanceSchema)