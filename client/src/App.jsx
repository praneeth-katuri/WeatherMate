import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherDetails from './components/WeatherDetails';
import ErrorMessage from './components/ErrorMessage';
import useWeather from './hooks/useWeather';

function App() {
  const [city, setCity] = useState('');
  const { weather, loading, error, fetchWeather } = useWeather();

  const handleSearch = () => {
    fetchWeather(city);
  };

  return (
    <div>
      <h1>WeatherMate</h1>
      <SearchBar city={city} setCity={setCity} onSearch={handleSearch} loading={loading} />
      {error && <ErrorMessage message={error} />}
      {weather && <WeatherDetails weather={weather} />}
    </div>
  );
}

export default App;
