const request = require("request");
require("dotenv").config();
const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=" +
    process.env.WEATHER_API_KEY +
    "&query=" +
    longitude +
    "," +
    latitude;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.success === false) {
      callback("Unable to find the location", undefined);
    } else {
      let response;
      if (body.current.temperature !== body.current.feelslike)
        response = `${body.current.weather_descriptions[0]}.It is currently ${body.current.temperature}°C out there and considering the wind chill factor its feels like ${body.current.feelslike}°C`;
      else
        response = `${body.current.weather_descriptions[0]}.It is currently ${body.current.temperature}°C out there.`;
      callback(undefined, response);
    }
  });
};
module.exports = forecast;
