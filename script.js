//formation of url
var api=  'https://api.openweathermap.org/data/2.5/forecast?q=';
var apiKey = '71fd9ac4372761cf0c6ce07b04862b3c';
var units = '&units=imperial';
var input; 
//set up city search button
$('#search').on("click", function(event){
    event.preventDefault();
    var input = $("#city").val();
    // store input values in local storage
    localStorage.setItem("cityList", JSON.stringify(cityList));

    populateCityWeatherData(input, cityList);
    $("#current-weather").show();
    $("#5dayforecast-weather").show();
});
$("#cities").on("click", "button", function(event){
    event.preventDefault();
    var city = $(this).text();
    populateCityWeatherData(input, cityList);
    $("#current-weather").show();
    $("#5dayforecast-weather").show();
});
//set up loop for city list
function createSearchList(cityList){
    $("#cities").empty();
    var list = Object.list(searchList);
    for (var i = 0; i < list.length; i++){
        var cityName = $("<button>");
        cityName.addClass("list-group-item list-group-item-action");
    };
    $("#cities").append(cityName);
}




function weatherData(){
    var queryURL = api + apiKey + input.value() + units
}
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