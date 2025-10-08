import { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import MoodDisplay from './components/MoodDisplay';
import { Weather } from './types';


const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch weather for entered city
  const fetchWeather = async () => {
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError('');

    // Build API URL dynamically
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&units=metric&appid=${API_KEY}`;
    console.log('Fetching URL:', url); // optional debug

    try {
      const res = await axios.get(url);
      console.log('API Response:', res.data); // optional debug
      setData(res.data);
    } catch (err: any) {
      console.error('API Error:', err.response?.data || err.message);
      setError(
        err.response?.data?.message
          ? `Error: ${err.response.data.message}`
          : 'City not found or API error'
      );
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>🌦️ AI Weather & Mood Dashboard</h1>

      {/* Search bar component */}
      <SearchBar city={city} setCity={setCity} onSearch={fetchWeather} />

      {/* Loading / Error messages */}
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {/* Weather + Mood display */}
      {data && (
        <>
          <WeatherCard data={data} />
          <MoodDisplay temp={data.main.temp} condition={data.weather[0].main} />
        </>
      )}

      {/* Hint for first-time users */}
      {!data && !loading && !error && (
        <p className="hint">Enter a city name to see the weather and mood suggestions.</p>
      )}
    </div>
  );
}

export default App;
