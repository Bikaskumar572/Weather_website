const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d23344c43a6ccdf404c8ebac6f1b242d&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                "localtime": body.location.localtime,
                "weather_icons": body.current.weather_icons,
                "weather_descriptions": body.current.weather_descriptions,
                "temperature": body.current.temperature,
                "wind_speed": body.current.wind_speed,
                "pressure": body.current.pressure,
                "precip": body.current.precip,
                "humidity": body.current.humidity,
                "cloudcover": body.current.cloudcover,
                "feelslike": body.current.feelslike,
                "uv_index": body.current.uv_index,
                "visibility": body.current.visibility
            })
        }
    })
}

module.exports = forecast