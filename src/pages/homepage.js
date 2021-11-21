import React from 'react'
import { Grid, Paper, Avatar, Typography } from '@material-ui/core'


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import MyMap from "../components/MapContainer";
const HomePage=()=>{

    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                    </Avatar>
                    <h2 style={headerStyle}>Hi There, Gajah Mada!</h2>
                    <Typography variant='caption' gutterBottom>Your all in one place to find travel buddies!</Typography>

                    <h3>Your Grouped Routes for Tomorrow</h3>
                    <h3>Your UnGrouped Routes for Tomorrow</h3>


                    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <MyMap/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                </Grid>
                
            </Paper>
        </Grid>
    )
}

export default HomePage