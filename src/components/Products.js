import React from 'react'

const Products = ({data}) => {
  return (
    <div>
        {/* {console.log("datainproducts",data)} */}
        <div className='row'>
            {
                data && data.map((item,index)=>(
                    <div className='col-md-3'>
                    <div className="card" style={{"width": "18rem;"}} key={index} >
                    <img src={item.recipe.image} class="card-img-top" alt="..." />
                    <center>
                    <div className="card-body">
                      <h5 className="card-title">{item.recipe.label}</h5>
                      <p className="card-text">Toatal Amount of calories : {Math.round(item.recipe.calories)}</p>
                      <button className="btn btn-primary">Go somewhere</button>
                    </div>
                    </center>
                  </div>
                  </div>
                ))
            }
        </div>
    </div>
  )
}

export default Products