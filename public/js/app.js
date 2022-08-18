console.log('client side java script file is loded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const humidity = document.querySelector('#humidity')
const wind_speed = document.querySelector('#wind_speed')
const pressure = document.querySelector('#pressure')
const uv_index = document.querySelector('#uv_index')
const visibility = document.querySelector('#visibility')
const cloud_cover = document.querySelector('#cloud_cover')
const weather_decsription = document.querySelector('#weather_decsription')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    humidity.textContent = ''
    wind_speed.textContent = ''
    pressure.textContent = ''
    uv_index.textContent = ''
    visibility.textContent = ''
    cloud_cover.textContent = ''
    weather_decsription.textContent = ''
    

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
                current_details.textContent = 'Current details'
                humidity.textContent = data.humidity
                wind_speed.textContent = data.wind_speed
                pressure.textContent = data.pressure
                uv_index.textContent = data.uv_index
                visibility.textContent = data.visibility
                cloud_cover.textContent = data.cloud_cover
                precip.textContent = data.precip
                weather_decsription.textContent = data.weather_decsription
            }
        })
    })

})