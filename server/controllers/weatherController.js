const axios = require("axios");
const transformWeather = require("../utils/transformWeather");

exports.getWeather = async (req, res) => {
  const city = req.query.city;

  if (!city || typeof city !== "string") {
    return res.status(400).json({ error: "Valid city name required" });
  }

  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: city,
          units: "metric",
          appid: process.env.WEATHER_API_KEY,
        },
      }
    );

    const weatherData = transformWeather(response.data);
    res.json(weatherData);
  } catch (error) {
    console.error("Weather API Error:", error.message);

    if (error.response?.status === 404) {
      return res.status(404).json({ error: "City not found" });
    }

    if (error.response?.status === 401) {
      return res.status(401).json({ error: "Invalid API key" });
    }

    res.status(500).json({ error: "Failed to fetch weather data" });
  }
};
