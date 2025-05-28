const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const Schema = mongoose.Schema

const departmentSchema = new Schema({
    department_id: {
        type: String,
        default: uuidv4,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    company_id: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Department', departmentSchema)