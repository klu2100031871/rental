import React from 'react'
import one from './Images/villa1.jpg'
import i from './Images/villa2.jpg'
import background from './Images/123.jpg'
import SimplePaper from './paper'
import { Paper } from '@mui/material'
import Navbar from './navbar'
import Stack from '@mui/material/Stack'
function Villa(){

  const mble=[
    {
    "img":<img src={one} width="300" height="300"/>,
    "model":"villa",
    "name":"Suzuki",
    "price":"Rs.20000/-",
    "available":true,
    "ModeOfPricing":"Per month"
},{
  "img":<img src={i} width="350" height="300"/>,
  "model":"villa",
  "name":"Ford",
  "price":"Rs9000/-",
  "available":true,
  "ModeOfPricing":"Per month"
}
]

    return (
        <div  >
          <Stack direction='row' spacing={14}>
        {mble.map((mb) => (
                  <h3
                  key={mb.id}>{mb.img}<br/> 
                  Model Number:{mb.model}<br/>
                  Model Name:{mb.name}<br/>
                  Price:{mb.price}<br/>
                  Available: {mb.available?"Yes" : "No"}<br/> 
                  ModeOfPricing : {mb.ModeOfPricing}</h3>))}
                  </Stack>
    </div>
  )
}
export default Villa