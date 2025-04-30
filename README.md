# 🌦️ WeatherMate

A full-stack weather search app built with **React**, **Express.js**, and the **OpenWeather API**.

## ✨ Features

- **City Search Autocomplete:**  
  Fetches and displays city suggestions as you type using the GeoDB Cities API.
  
- **Weather Data Display:**  
  Retrieves and shows real-time weather data from the OpenWeatherMap API.
  
- **Debounced API Requests:**  
  Automatically debounces input to reduce unnecessary API calls.
  
- **Responsive & Modern UI:**  
  A clean, mobile-friendly interface powered by Tailwind CSS.

## 🛠️ Technologies Used

| Category   | Technologies                              |
| ---------- | ----------------------------------------- |
| Frontend   | React.js, Tailwind CSS, Vite              |
| Backend    | Express.js, Node.js                       |
| APIs       | OpenWeatherMap API, GeoDB Cities API      |

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

## 2. Setup and Installation

### Install Frontend Dependencies
```bash
cd client
npm install
```

### Install Backend Dependencies
```bash
cd ../server
npm install
```

## 3. Environment Variables

Create a `.env` file in the `server` directory with your API keys:

```env
# server/.env
OPENWEATHER_API_KEY=your_openweather_api_key
GEODB_API_KEY=your_geodb_api_key
```

## 4. Start the Application

### Start the Backend Server
```bash
cd server
node index.js
```

By default, the backend server listens at:

`http://localhost:5000`

### Start the Frontend
```bash
cd client
npm start
```

The frontend runs at:

`http://localhost:5173`

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

## Credits

- **Weather Data:** [OpenWeatherMap](https://openweathermap.org)
- **City Suggestions:** [GeoDB Cities API](https://rapidapi.com/wirefreethought/api/geodb-cities/)
