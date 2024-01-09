import React, { useState } from 'react'
import axios from 'axios'
import Products from './components/Products';
const FoodRecipie = () => {
    const [food,setFood] = useState("");
    const [data,setData] = useState([]);
    const YOUR_APP_ID = "deef88c9";
    const YOUR_APP_KEY ="f9a8ff84ccd1dfef9eea8abb49b29a26";
    // https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free
    const submitHandler= async (e)=>{
        e.preventDefault();
        console.log("food",food);
         await axios.get(`https://api.edamam.com/search?q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then((response)=>{
            console.log(response.data.hits,"response");
            setData(response.data.hits)
            setFood("")
        }).catch((error)=>{
            console.log("error",error);
            setData("No data for this food")
        })
    }
  return (
    <div>
            <h4>Food Recipie</h4> <br />
        <center>
            <form onSubmit={submitHandler}>
                <input type='text'   value={food} onChange={(e)=>setFood(e.target.value)} placeholder='search the food...'/> &nbsp;&nbsp;
                <input type='submit' name="Search" className="btn btn-primary" />
            </form>
        </center>
        <br />
            {data.length>=1&& <Products data={data}/>}
    </div>
  )
}

export default FoodRecipie