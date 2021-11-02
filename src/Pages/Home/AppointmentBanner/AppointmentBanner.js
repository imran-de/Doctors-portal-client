import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
//import image
import bg from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,48,74,.8)',
    backgroundBlendMode: 'darken',
    marginTop: '200px',
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <img
                        style={{ width: 400, height: '400px', marginTop: '-110px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={7} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left',
                }}>
                    <Box>
                        <Typography variant='h6' sx={{ mb: 3 }} style={{ color: '#5ce7ed' }}>
                            Appointment
                        </Typography>
                        <Typography variant='h4' sx={{ mb: 2 }} style={{ color: 'white' }}>
                            Make an Appointment <br /> Today
                        </Typography>
                        <Typography variant='h6' style={{ color: 'white', fontSize: 15, fontWeight: 300 }}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its.
                        </Typography>
                        <Button variant="contained" sx={{ my: 3, backgroundColor: "#5ce7ed" }}>LEARN MORE</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;