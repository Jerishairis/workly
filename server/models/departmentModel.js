const mongoose = require('mongoose')

const Schema = mongoose.Schema

const departmentSchema = new Schema({
    department_id: {
        type: String,
        require: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Department', departmentSchema)