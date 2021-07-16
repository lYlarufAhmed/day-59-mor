const mg = require('mongoose')

const PlaceSchema = new mg.Schema({
    name: {
        type: String,
        required: true
    },
    slug: String,
    city: {
        type: String,
        required: true
    },
    state: String,
    createdAt: Number,
    updatedAt: Number
}, {timestamps: () => Math.floor(Date.now() / 1000)})

const Place = new mg.model('Place', PlaceSchema)
module.exports = Place