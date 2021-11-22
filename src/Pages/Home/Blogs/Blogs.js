import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Blogs = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Grid container spacing={3} sx={{ textAlign: 'center' }}>
                <Grid item xs={12}>
                    <Typography sx={{ fontWeight: 500, mt: 3, color: 'success.main' }} gutterBottom variant="h6" component="div">
                        OUR BLOG
                    </Typography>
                    <Typography sx={{ fontWeight: 600, mb: 5 }} gutterBottom variant="h4" component="div">
                        From Our Blog News
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
                            <Typography variant='div' component='div'>
                                <Grid container sx={{ display: 'flex' }}>
                                    <img src="https://i.ibb.co/rQKVF0Y/u-https-allworldpm-com-wp-content-uploads-2016-10-230x230-avatar-dummy-profile-pic.jpg" style={{ width: '31px', height: '31px', borderRadius: '50%' }} alt="" />
                                    <Typography sx={{ ml: 1 }} variant='div' component='div'>
                                        <span style={{ color: '#5FC7C7' }}>Dr. Caudi</span><br />
                                        <span style={{ color: '#B3B2B5' }}>23 April 2021</span>
                                    </Typography>
                                </Grid>
                            </Typography>
                            <Typography sx={{ fontSize: '28px', py: 2 }} variant='h3' component='h3'>
                                2 times of brush in a day can keep you healthy
                            </Typography>
                            <Typography sx={{ color: '#B3B2B5' }} variant='p' component='p'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit ex a vero aliquid facilis voluptas blanditiis dicta culpa quia!
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
                            <Typography variant='div' component='div'>
                                <Grid container sx={{ display: 'flex' }}>
                                    <img src="https://i.ibb.co/rQKVF0Y/u-https-allworldpm-com-wp-content-uploads-2016-10-230x230-avatar-dummy-profile-pic.jpg" style={{ width: '31px', height: '31px', borderRadius: '50%' }} alt="" />
                                    <Typography sx={{ ml: 1 }} variant='div' component='div'>
                                        <span style={{ color: '#5FC7C7' }}>Dr. Caudi</span><br />
                                        <span style={{ color: '#B3B2B5' }}>23 April 2021</span>
                                    </Typography>
                                </Grid>
                            </Typography>
                            <Typography sx={{ fontSize: '28px', py: 2 }} variant='h3' component='h3'>
                                2 times of brush in a day can keep you healthy
                            </Typography>
                            <Typography sx={{ color: '#B3B2B5' }} variant='p' component='p'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit ex a vero aliquid facilis voluptas blanditiis dicta culpa quia!
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
                            <Typography variant='div' component='div'>
                                <Grid container sx={{ display: 'flex' }}>
                                    <img src="https://i.ibb.co/rQKVF0Y/u-https-allworldpm-com-wp-content-uploads-2016-10-230x230-avatar-dummy-profile-pic.jpg" style={{ width: '31px', height: '31px', borderRadius: '50%' }} alt="" />
                                    <Typography sx={{ ml: 1 }} variant='div' component='div'>
                                        <span style={{ color: '#5FC7C7' }}>Dr. Caudi</span><br />
                                        <span style={{ color: '#B3B2B5' }}>23 April 2021</span>
                                    </Typography>
                                </Grid>
                            </Typography>
                            <Typography sx={{ fontSize: '28px', py: 2 }} variant='h3' component='h3'>
                                2 times of brush in a day can keep you healthy
                            </Typography>
                            <Typography sx={{ color: '#B3B2B5' }} variant='p' component='p'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit ex a vero aliquid facilis voluptas blanditiis dicta culpa quia!
                            </Typography>

                        </Paper>
                    </Box>
                </Grid>

            </Grid>

        </Container>
    );
};

export default Blogs;