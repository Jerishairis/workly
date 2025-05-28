const mongoose = require('mongoose')
const { v4: uuidv4} = require('uuid')

const Schema = mongoose.Schema

const employeeProfileSchema = new Schema({
    profile_id: {
        type: String,
        default: uuidv4,
        unique: true
    },
    user_id: {
        type: String,
        ref: 'User',
        required: true,
        unique: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    department_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true,
    },
    salary: {
        type: Number,
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model('EmployeeProfile', employeeProfileSchema)