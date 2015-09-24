//
//  Free Code Camp
//  7. Front End Development Projects (Basic)
//
//  Created by Dulio Denis on 9/24/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Zipline: Show the Local Weather
//  http://freecodecamp.com/challenges/zipline-show-the-local-weather
//

$(document).ready(function() {

  getLocation();

  function getLocation() {
    $.get("http://ipinfo.io", function(location) {
      
      $('.location')
        .append(location.city + ", ")
        .append(location.region);

      var units = getUnits(location.country);
      getWeather(location.loc, units);

      //return weather;

    }, "jsonp");

  }

  function getWeather(location, units) {
    var lat = location.split(",")[0];
    var lon = location.split(",")[1];

    var weatherAPIUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + "&units=" + units;

    $.get(weatherAPIUrl, function(weather) {
      var windDir = convertWindDirection(weather.wind.deg);
      var temperature = weather.main.temp;
      var unitLabel;

      //label based in imperial vs metric units
      if (units === "imperial") {
        unitLabel = "F";
      } else {
        unitLabel = "C";
      }

      temperature = parseFloat((temperature).toFixed(1));

      $('#icon')
        .append("<img src='http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png'>");

      $('#temp').append(temperature + "&#176; " + unitLabel);
      $('#conditions').append(weather.weather[0].description);
      $('#wind').append(windDir + " " + weather.wind.speed + " knots");
      $('#postal').append(postal);

    }, "jsonp");

  };

  function convertWindDirection(dir) {
    var rose = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    var eightPoint = Math.floor(dir / 45);
      
    return rose[eightPoint];
  }

  function getUnits(country) {
    var imperialCountries = ['US', 'BS', 'BZ', 'KY', 'PW'];

    if (imperialCountries.indexOf(country) === -1) {
      var units = 'metric';
    } else {
      units = 'imperial';
    }

    return units;
  }

});