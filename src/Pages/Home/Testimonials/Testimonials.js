import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
const Testimonials = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontWeight: 500, mt: 3, color: 'success.main' }} gutterBottom variant="h6" component="div">
                        TESTIMONIAL
                    </Typography>
                    <Typography sx={{ fontWeight: 600, mb: 5 }} gutterBottom variant="h4" component="div">
                        What's Our Patients Says
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{ textAlign: 'right' }}>
                    <Typography variant='h1' component='h1' sx={{ fontSize: '916', color: '#3CD4D5', opacity: '.3' }}>
                        <i className="fas fa-quote-left"></i>
                    </Typography>
                </Grid>
            </Grid>

            <Grid container spacing={4}>
                <Grid xs={12} md={4}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1, p: 2

                            },
                        }}
                    >
                        <Paper>
                            <Typography variant='p' component='p'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit ex a vero aliquid facilis voluptas blanditiis dicta culpa quia!
                            </Typography>
                            <Typography sx={{ pt: 4 }} variant='div' component='div'>
                                <Grid container sx={{ display: 'flex' }}>
                                    <img src="https://i.ibb.co/rQKVF0Y/u-https-allworldpm-com-wp-content-uploads-2016-10-230x230-avatar-dummy-profile-pic.jpg" style={{ width: '31px', height: '31px', borderRadius: '50%' }} alt="" />
                                    <Typography sx={{ ml: 1 }} variant='div' component='div'>
                                        <span style={{ color: '#5FC7C7' }}>Winson Herry</span><br />
                                        <span>Location</span>
                                    </Typography>
                                </Grid>
                            </Typography>
                        </Paper>
                    </Box>
                </Grid>
                <Grid xs={12} md={4}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1, p: 2

                            },
                        }}
                    >
                        <Paper>
                            <Typography variant='p' component='p'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit ex a vero aliquid facilis voluptas blanditiis dicta culpa quia!
                            </Typography>
                            <Typography sx={{ pt: 4 }} variant='div' component='div'>
                                <Grid container sx={{ display: 'flex' }}>
                                    <img src="https://i.ibb.co/rQKVF0Y/u-https-allworldpm-com-wp-content-uploads-2016-10-230x230-avatar-dummy-profile-pic.jpg" style={{ width: '31px', height: '31px', borderRadius: '50%' }} alt="" />
                                    <Typography sx={{ ml: 1 }} variant='div' component='div'>
                                        <span style={{ color: '#5FC7C7' }}>Winson Herry</span><br />
                                        <span>Location</span>
                                    </Typography>
                                </Grid>
                            </Typography>
                        </Paper>
                    </Box>
                </Grid>
                <Grid xs={12} md={4}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1, p: 2

                            },
                        }}
                    >
                        <Paper>
                            <Typography variant='p' component='p'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit ex a vero aliquid facilis voluptas blanditiis dicta culpa quia!
                            </Typography>
                            <Typography sx={{ pt: 4 }} variant='div' component='div'>
                                <Grid container sx={{ display: 'flex' }}>
                                    <img src="https://i.ibb.co/rQKVF0Y/u-https-allworldpm-com-wp-content-uploads-2016-10-230x230-avatar-dummy-profile-pic.jpg" style={{ width: '31px', height: '31px', borderRadius: '50%' }} alt="" />
                                    <Typography sx={{ ml: 1 }} variant='div' component='div'>
                                        <span style={{ color: '#5FC7C7' }}>Winson Herry</span><br />
                                        <span>Location</span>
                                    </Typography>
                                </Grid>
                            </Typography>
                        </Paper>
                    </Box>
                </Grid>

            </Grid>

        </Container>
    );
};

export default Testimonials;