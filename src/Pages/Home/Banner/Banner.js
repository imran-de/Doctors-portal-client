import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
//import images
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Container, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`,
    height: '450px',
    width: '100%'
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '400px'
}
const Banner = () => {
    return (
        <Container className="banner-bg" style={bannerBg} sx={{ mt: 2 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ ...verticalCenter, textAlign: 'left' }}>
                        <Box>
                            <Typography variant='h3'>
                                Your New Smile <br />
                                Starts Here
                            </Typography>
                            <Typography variant='h6' sx={{ my: 3, fontSize: 14, color: 'gray', fontWeight: 200 }}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores unde repellat nisi culpa officiis hic numquam earum nobis porro distinctio.
                            </Typography>
                            <Button variant="contained" sx={{ backgroundColor: "#5ce7ed", mt: 2 }}>GET APPOINTMENT</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={verticalCenter}>
                        <img className='banner-img'
                            style={{ width: '400px' }}
                            src={chair} alt="" />
                    </Grid>
                </Grid>
            </Box >
        </Container>
    );
};

export default Banner;