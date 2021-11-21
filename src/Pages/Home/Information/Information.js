import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

const Information = () => {
    return (
        <>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Grid container spacing={2}
                            sx={{
                                color: '#fff',
                                background: '#1CC7C1',
                                paddingBottom: '10px',
                                borderRadius: 1
                            }}
                        >
                            <Grid item xs={3}>
                                <Typography variant='h2'>
                                    <i className="far fa-clock"></i>
                                </Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant='h6'> Opening Hours</Typography>
                                <Typography variant='p' component='p'> Saturday-Thursday: 8.00AM - 8.00PM</Typography>
                                <Typography variant='p' component='p'> Friday: 10.00AM - 7.00PM</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container spacing={2}
                            sx={{
                                color: '#fff',
                                background: '#3A4256',
                                paddingBottom: '10px',
                                borderRadius: 1
                            }}
                        >
                            <Grid item xs={3}>
                                <Typography variant='h2'>
                                    <i className="fas fa-map-marker-alt"></i>
                                </Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant='h6'> Visit our location</Typography>
                                <Typography variant='p' component='p'>Boston, NY-3100, United States</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container spacing={2}
                            sx={{
                                color: '#fff',
                                background: '#1CC7C1',
                                paddingBottom: '10px',
                                borderRadius: 1
                            }}
                        >
                            <Grid item xs={3}>
                                <Typography variant='h2'>
                                    <i className="fas fa-phone-alt"></i>
                                </Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant='h6'> Contact Us Now</Typography>
                                <Typography variant='p' component='p'>
                                    <a href="tel:+8801926294263" style={{ color: '#fff', textDecoration: 'none' }}>
                                        +8801926294263
                                    </a>
                                </Typography>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Information;