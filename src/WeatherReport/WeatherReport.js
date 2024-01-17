import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherReport = ({ latitude, longitude }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto&past_days=3`
        );
        console.log(response.data,"Response")
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [latitude, longitude]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const currentWeather = weatherData.current;
  const dailyForecast = weatherData.daily;

  return (
    <div className="weather-card">
      <h2>User Location: {weatherData.timezone}</h2>
      <div>
        <p>Current Temperature: {currentWeather.temperature_2m}°C</p>
        {/* <p>Weather Description: {currentWeather.weather.description}</p> */}
        {/* <img src={currentWeather.weather.icon} alt="Weather Icon" /> */}
      </div>
      <h3>3-Day Weather Forecast:</h3>
      {/* <div className="forecast">
        {dailyForecast.map((day, index) => (
          <div key={index} className="day-forecast">
            <p>Date: {day.date}</p>
            <p>Temperature Range: {day.temperature_2m_min}°C - {day.temperature_2m_max}°C</p>
            <p>Weather Condition: {day.weather.description}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default WeatherReport;
