const mongoose = require('mongoose')

const Schema = mongoose.Schema

const companySchema = new Schema ({
    company_name: {
        type: String,
        required: true,
        unique: true
    },
    admin_user: {
        type: String,
        ref: 'User',
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Company', companySchema)