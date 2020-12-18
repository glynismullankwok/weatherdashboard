//var cityName =

var apiKey = '71fd9ac4372761cf0c6ce07b04862b3c'
var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?q=orlando&appid=' + apiKey

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function(weatherData) {
    console.log(weatherData)
    $('.city').text("City:"+weatherData.name)
    $('.condition').text("Condition:"+weatherData.condition)
    $('.wind').text("Wind Speed:"+weatherData.wind)
    $('.UV').text("UV Index:"+weatherData.uv)
    $('.humidity').text("Humidity:"+weatherData.humidity)
    $('.temp').text("Temp:"+((weatherData.main.temp - 273.15) * 9/5 + 32)toFixed() + "F")
})



//create a city list under the enter box with button




//append list/populate weather data conditions, temp, hum, wind and uv

//var queryURL here = city

//call $.ajax here({url:queryURL, method:GET})

//then.(function(weather)){console.log(queryURL)
//console.log(weatherData)}

//current weather of city and display