const mongoose = require('mongoose')

const fototecaSchema = new mongoose.Schema({
    title: String,
    image_url: String,
    date: String,
    dominantColor: [Number]

})

const fototeca = mongoose.model('fototeca', fototecaSchema)

module.exports = fototeca;