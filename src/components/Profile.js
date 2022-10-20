import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import one from './Images/id.jpg'

function Profile() {
  return (
    <center>
      <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
       <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={one}
          alt="green iguana"
        />
        <CardContent className='App'>
          <Typography gutterBottom variant="h5" component="div">
            User Profile
          </Typography>
          <Typography variant="body2" color="text.secondary">
           <pre> Name: User_name
            <br></br>
            mail id : xyz123@gmail.com
            <br></br>
            Mobile Number : 123457689
            <br></br>
            Rented Houses: User_Houses_taken
            <br></br>
            </pre>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </center>
  )
}

export default Profile