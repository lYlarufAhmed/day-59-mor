const express = require('express')
const app = express()
const morgan = require('morgan')
const PORT = 3005
const mg = require('mongoose')
const {getPlaces} = require("./models/places/controller");
const {getPlace} = require("./models/places/controller");
const {createNewPlace} = require('./models/places/controller')

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/:place_id', (async (req, res) => {
    const _id = req.params.place_id
    console.log('id', _id)
    const place = await getPlace(_id)
    res.json(place)


}))
app.post('/', (async (req, res) => {
    console.log(req.body)
    const newPlace = await createNewPlace(req.body)
    res.json(newPlace)
}))

app.get('/', (async (req, res) => {
    // console.log(req.query)
    const places = await getPlaces(req.query)
    console.log(places)
    res.json(places)
}))


app.listen(PORT, async () => {
    console.log('listening on: ', PORT)

    await mg.connect('mongodb://127.0.0.1:27017/places', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
})