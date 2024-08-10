// src/App.jsx
import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherDetails from "./components/WeatherDetails";
import ErrorMessage from "./components/ErrorMessage";
import useWeather from "./hooks/useWeather";

function App() {
  const [city, setCity] = useState("");
  const { weather, loading, error, fetchWeather } = useWeather();

  const handleSearch = () => {
    fetchWeather(city);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-blue-500 flex items-center justify-center py-10 px-4">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-center text-blue-900 mb-8">
          WeatherMate
        </h1>
        <SearchBar
          city={city}
          setCity={setCity}
          onSearch={handleSearch}
          loading={loading}
        />
        {error && <ErrorMessage message={error} />}
        {weather && <WeatherDetails weather={weather} />}
      </div>
    </div>
  );
}

export default App;
