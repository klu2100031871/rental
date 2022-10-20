import React from 'react'
import one from './Images/duplex1.jpg'
import i from './Images/duplex2.jpg'

import background from './Images/123.jpg'
import SimplePaper from './paper'
import { Paper } from '@mui/material'
import { fontFamily } from '@mui/system'
function Duplex(){
 
  const mble=[
    {
     
    "img":<div className='beep'><img src={one} width="380" height="300" /> Duplex</div>,
    "model":"duplex",
    "name":"chanu residency",
    "price":"Rs.20000/-",
    "available":true,
    "ModeOfPricing":"Per month"
    
},{
  "img":<div className='beep'><img src={i} width="350" height="300"/>Duplex</div>,
  "model":"duplex",
  "name":"vardha residency",
  "price":"Rs25000/-",
  "available":true,
  "ModeOfPricing":"Per month"
  
}
]

    return (
        <div class="column" >
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
export default Duplex;