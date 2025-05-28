const mongoose = require('mongoose')
const {v4: uuidv4} = require('uuid')

const Schema = mongoose.Schema

const roleSchema = new Schema( {
    role_id: {
        type: String,
        default: uuidv4,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
}, {timestamps: true});

module.exports = mongoose.model('Role', roleSchema)