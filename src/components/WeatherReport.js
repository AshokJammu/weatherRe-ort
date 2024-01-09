import React,{useState} from 'react'
import axios from "axios"
const WeatherReport = () => {
    const [city,setCity] = useState("");
    const [data,setData] = useState([]);
  
    const submitHandler=(e)=>{
      e.preventDefault();
      console.log("city",city);
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
      .then((response)=>{
        console.log(response.data.main,"response")
        const kelvin = response.data.main.temp;
        const celsius = kelvin -273.15
        setData("Temperature at "+ city + " \n" +Math.round(celsius)+"°C")
        setCity('')
      }
      ).catch((err)=>{
        console.log("err",err)
        setData("City name is Wrong")
      }
      )
  
    }
    return (
      <div>
        <center>
          <div className='card'>
            <div className='card-body'>
                <h3 className='cardTitle'>WeatherApp</h3> <br/>
                <form onSubmit={submitHandler}>
                  <input type = "text" name="city" value={city} onChange={(e)=>setCity(e.target.value)} placeholder='Enter city name....'/> <br /> <br />
                  <input type='submit' value={"Button"}/>
                </form>
                <br />
                <div>
                  <h4>{data}</h4>
                </div>
            </div>
          </div>
        </center>
      </div>
    )
  }

export default WeatherReport