const mongoose = require('../db/connection.js')

const Schema = mongoose.Schema

const LinkSchema = new Schema ({
    url: String,
    title: String,
    desc: String,
    date: Date
})

module.exports = mongoose.model('Link', LinkSchema)