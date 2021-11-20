const express = require('express')
const bodyParser = require('body-parser')
const weatherRequest = require('./requests/weather.requests')

const app = express()
//1f81bcecd3c9fd6ae3a42adc8f7bda3c

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (request, response) => {
    response.render('index')
})

app.post('/', (request, response) => {
    const { city } = request.body
    weatherRequest(city)
    response.render('index')
})

app.listen(3000, () => {
    console.log('Server has started on port 3000...')
})