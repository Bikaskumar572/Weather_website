const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const { title } = require('process')

const app = express()
const port = process.env.PORT || 3000

//Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and view location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Bikas Kumar'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Bikas Kumar'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is my example help text',
        title: 'Help',
        name: 'Bikas Kumar'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }
    //address --> latitude and longtiude
    geoCode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }
        // latitude and longtiude --> forecast
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                weather_icons: forecastData.weather_icons,
                weather_descriptions: forecastData.weather_descriptions,
                forecast: 'It is currently ' + forecastData.temperature + '°C out. Feels like ' + forecastData.feelslike + '°C.',
                wind_speed: 'Wind Speed: ' + forecastData.wind_speed + ' km/h',
                pressure: 'Pressure: ' + forecastData.pressure + ' mBar',
                precip: forecastData.precip + ' % chance of precipitation tonight',
                humidity: 'Humidity: ' + forecastData.humidity + '%',
                cloudcover: 'Cloud Cover: ' + forecastData.cloudcover,
                uv_index: 'UV index: ' + forecastData.uv_index,
                visibility: 'Visibility: ' + forecastData.visibility + ' km',
                address: req.query.address,
                location
            })
        })
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Bikas Kumar',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Error',
        name: 'Bikas Kumar',
        errorMessage: 'Page not found'
    })
})

app.listen(port, () => {
    console.log('Server is up on port' + port)
})
