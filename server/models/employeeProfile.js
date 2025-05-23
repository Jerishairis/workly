const mongoose = require('mongoose')

const Schema = mongoose.Schema

const employeeProfileSchema = new Schema({
    profile_id: {
        type: String,
        required: true,
        unique: true
    },
    user_id: {
        type: String,
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
        type: String,
        required: true,
        unique: true
    },
    salary: {
        type: String,
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model('EmployeeProfile', employeeProfileSchema)