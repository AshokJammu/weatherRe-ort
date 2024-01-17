import React  from 'react'
import WeatherApp  from './components/WeatherReport'
import FoodRecipie from './FoodRecipie'
import WeatherInput from './WeatherReport/WeatherInput'
// import axios from "axios"

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// apiKey="d885aa1d783fd13a55050afeef620fcb"
const App = () => {
  
  return (
    <div>
      <center>
         {/* <h6>ReactAPPS</h6> */}
         {/* <WeatherApp /> */}
         {/* <FoodRecipie /> */}
         <WeatherInput />
      </center>
    </div>
  )
}

export default App