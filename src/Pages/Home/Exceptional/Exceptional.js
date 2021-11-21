import { Button, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import treatmentImg from '../../../images/treatment.png';
const Exceptional = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <CardMedia
                        component="img"
                        height="300px"
                        image={treatmentImg}
                        alt="green iguana"
                    />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex', alignItems: 'center'
                }}>
                    <Box>
                        <Typography variant='h4' component='h4'>
                            Exceptional Dental Care, on Your Terms
                        </Typography>
                        <Typography variant='p' component='p'>
                            It is a long established fact that a reader will be distracted
                            by the readable content of a page when looking at its
                            layout. The point of using Lorem Ipsumis that it has
                            a more-or-less normal distribution of letters,as opposed
                            to using ‘Content here
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: "#5ce7ed", mt: 2 }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Exceptional;