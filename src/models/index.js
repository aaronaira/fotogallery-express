const mongoose = require('mongoose')

const fototecaSchema = new mongoose.Schema({
    title: String,
    image_url: String,
    date: { type: Date, default: Date.now },
    dominantColor: [Number]

})

const fototeca = mongoose.model('fototeca', fototecaSchema)

module.exports = fototeca;