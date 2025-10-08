import React from 'react';
import { Weather } from '../types';

const WeatherCard: React.FC<{ data: Weather }> = ({ data }) => {
  const icon = data.weather?.[0]?.icon;
  const iconUrl = icon ? `https://openweathermap.org/img/wn/${icon}@4x.png` : '';

  return (
    <div className="weather-card">
      <div className="weather-header">
        {iconUrl && <img src={iconUrl} alt={data.weather[0].description} />}
        <div>
          <h2>{data.name}</h2>
          <p>{data.weather[0].description}</p>
        </div>
      </div>
      <div className="weather-stats">
        <p>🌡️ Temperature: {Math.round(data.main.temp)}°C</p>
        <p>💧 Humidity: {data.main.humidity}%</p>
        <p>🌬️ Wind: {data.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;
