import React from 'react'
import WeatherReport from './WeatherReport';
const WeatherInput = () => {
    return (
        <div>
          <WeatherReport latitude={52.52} longitude={13.41} />
          {/* Add more instances with different latitude and longitude as needed */}
          {/* <WeatherCard latitude={anotherLatitude} longitude={anotherLongitude} /> */}
        </div>
      );
}

export default WeatherInput