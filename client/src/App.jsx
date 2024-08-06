import { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch weather');
      }
      
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <h1>Weather App</h1>
        
        <div>
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchWeather()}
          />
          <button
            onClick={fetchWeather}
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>

        {error && (
          <div>
            {error}
          </div>
        )}

        {weather && (
          <div>
            <h2>
              {weather.city}, {weather.country}
            </h2>
            <div>
              <img 
                src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} 
                alt={weather.conditions}
                className="w-20 h-20"
              />
              <span className="text-5xl font-bold text-blue-800">
                {Math.round(weather.temperature)}°C
              </span>
            </div>
            <p className="text-xl capitalize text-gray-700">
              {weather.description}
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
              <div className="p-3 rounded-lg">
                <p>Feels Like</p>
                <p className="font-semibold">{Math.round(weather.feels_like)}°C</p>
              </div>
              <div className="p-3 rounded-lg">
                <p>Humidity</p>
                <p className="font-semibold">{weather.humidity}%</p>
              </div>
              <div className="p-3 rounded-lg">
                <p>Wind</p>
                <p className="font-semibold">{weather.wind} m/s</p>
              </div>
              <div className="p-3 rounded-lg">
                <p>Conditions</p>
                <p className="font-semibold capitalize">{weather.conditions}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;