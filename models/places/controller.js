const Place = require('./model')

const createNewPlace = async (data) => {
    const buffer = new Place(data)
    await buffer.save()
    return buffer
}

const getPlace = async (_id) => await Place.findOne({_id})
const getPlaces = async (query={})=> await Place.find(query)

module.exports = {
    createNewPlace,
    getPlace,
    getPlaces
}