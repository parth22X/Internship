import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';




export default function GridLearn() {
  return (
    <Box sx={{ flexGrow: 1, background:"#5E019A" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{display:"flex",justifyContent:"center"}}>
          <img src="images/recep.png" alt="Not available" />
        </Grid>
        <Grid item xs={12} md={6}>
   
            <Typography variant='h4'>Get your desired hotel at your price</Typography>
            <Typography paddingTop={2}>Tired of searching for the perfect hotel that fits your budget? With BidInn, you can set your own price and find the perfect stay!</Typography>
            <Box pt={10} >
                <Button sx={{bgcolor:"white",color:"gray"}}>Learn More..</Button>
                </Box>
            
 
        </Grid>
      </Grid>
    </Box>
  );
}