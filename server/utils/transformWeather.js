module.exports = function transformWeather(data) {
  return {
    city: data.name,
    country: data.sys?.country,
    temperature: data.main.temp,
    feels_like: data.main.feels_like,
    humidity: data.main.humidity,
    wind: data.wind.speed,
    conditions: data.weather[0].main,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
  };
};
