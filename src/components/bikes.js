import React from 'react'
import one from './Images/car1.jpg'
import i from './Images/car2.jpg'
import SimplePaper from './paper'
function Cars() {
  const mble=[{
    "img":<img src={one} width="150" height="150"/>,
    "model":9,
    "name":"Suzuki",
    "price":"Rs.2000/-",
    "available":true,
    "ModeOfPricing":"Per Day",
},
{
  "img":<img src={i} width="150" height="150"/>,
  "model":14,
  "name":"Ford",
  "price":"Rs4000/-",
  "available":true,
  "ModeOfPricing":"Per Day"
}]
    return (
        <div class="column">
        {mble.map((mb) => (
                  <h4
                  key={mb.id}>{mb.img}<br/> 
                  Model Number:{mb.model}<br/>
                  Model Name:{mb.name}<br/>
                  Price:{mb.price}<br/>
                  Available: {mb.available?"Yes" : "No"}<br/> 
                  ModeOfPricing : {mb.ModeOfPricing}</h4>))}
    </div>
  )
}
export default Cars