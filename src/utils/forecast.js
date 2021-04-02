const request = require('request')

const forecast = (longitude, latitude, callback) => {
const url = 'http://api.weatherstack.com/current?access_key=66789ca10961aef20f3ec238b6f193ed&query=/' + latitude + ',' + longitude + '&units=f'

request({ url: url, json: true }, (error, { body }) => {
if (error) {
   callback('Unable to connect to service', undefined)
} else if (body.error) {
 callback('Unable to find Location', undefined)
} else {
    callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. " + "But it feels like " + body.current.feelslike
      
    ) 
}
   })

}

module.exports = forecast

// (body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. " + "But it feels like " + response.body.current.feelslike)