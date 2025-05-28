const mongoose = require('mongoose')

const Schema = mongoose.Schema

const attendanceSchema = new Schema({
    attendance_id: {
        type: String,
        required: true,
        unique: true
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
    company_id: {
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ['present', 'absent','half-day', 'late'],
        default: 'absent'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamps: true})

attendanceSchema.index({user: 1, date: 1}), ({unique: true})

module.exports = mongoose.model('Attendance', attendanceSchema)