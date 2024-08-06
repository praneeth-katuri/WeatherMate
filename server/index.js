require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rate limiting (100 requests per 15 minutes)
app.use(
  "/api/",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests, please try again later",
  })
);

// Weather endpoint
app.get("/api/weather", async (req, res) => {
  const city = req.query.city;

  // Validation
  if (!city || typeof city !== "string") {
    return res.status(400).json({ error: "Valid city name required" });
  }

  try {
    // Fetch from OpenWeather API directly
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

    // Transform response
    const weatherData = {
      city: response.data.name,
      country: response.data.sys?.country,
      temperature: response.data.main.temp,
      feels_like: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      conditions: response.data.weather[0].main,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    };
    res.setHeader("Content-Type", "application/json");
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
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
