// src/components/WeatherDetails.jsx
function WeatherDetails({ weather }) {
  return (
    <div className="mt-6">
      <div className="bg-blue-100 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold text-blue-900 text-center mb-4">
          {weather.city}, {weather.country}
        </h2>
        <div className="flex flex-col items-center mb-6">
          <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center shadow-md">
            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
              alt={weather.conditions}
              className="w-24 h-24"
            />
          </div>
          <span className="text-6xl font-bold text-blue-800 mt-4">
            {Math.round(weather.temperature)}°C
          </span>
        </div>

        <p className="text-xl text-center capitalize text-gray-700 mb-4">
          {weather.description}
        </p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p>Feels Like</p>
            <p className="font-semibold">{Math.round(weather.feels_like)}°C</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p>Humidity</p>
            <p className="font-semibold">{weather.humidity}%</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p>Wind</p>
            <p className="font-semibold">{weather.wind} m/s</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p>Conditions</p>
            <p className="font-semibold capitalize">{weather.conditions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
