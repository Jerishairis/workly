const mongoose = require('mongoose')

const Schema = mongoose.Schema

const roleSchema = new Schema( {
    role_id: {
        type: mongoose.Schema.type.objectId,
        unique: true,
        required: true},
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Role', roleSchema)