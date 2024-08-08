function WeatherDetails({ weather }) {
  return (
    <div>
      <h2>{weather.city}, {weather.country}</h2>
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
      <p className="text-xl capitalize text-gray-700">{weather.description}</p>
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
  );
}

export default WeatherDetails;
