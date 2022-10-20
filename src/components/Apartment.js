import React from 'react'
import one from './Images/apartment1.jpg'
import i from './Images/apartment2.jpg'
import background from './Images/123.jpg'
import SimplePaper from './paper'
import { Paper } from '@mui/material'
import './building.css'
function Apartment(){
  const mble=[
    {
    "img":<img src={one} width="300" height="300"/>,
    "model":"Apartment",
    "name":"raju aparments",
    "price":"Rs.9000/-",
    "available":true,
    "ModeOfPricing":"Per month"
},{
  "img":<img src={i} width="350" height="300"/>,
  "model":"Apartment",
  "name":"kiran apartments",
  "price":"Rs8000/-",
  "available":true,
  "ModeOfPricing":"Per month"
}
]

    return (
        <div className='column' >
        {mble.map((mb) => (
                  <h3
                  key={mb.id}>{mb.img}<br/> 
                  Model Number:{mb.model}<br/>
                  Model Name:{mb.name}<br/>
                  Price:{mb.price}<br/>
                  Available: {mb.available?"Yes" : "No"}<br/> 
                  ModeOfPricing : {mb.ModeOfPricing}</h3>))}
    </div>
  )
}
export default Apartment;