import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Information from '../Information/Information';
import Services from '../Services/Services';
import { Box } from '@mui/system';
import Exceptional from '../Exceptional/Exceptional';

const Home = () => {
    return (
        <Box>
            <Navigation />
            <Banner />
            <Information />
            <Services />
            <AppointmentBanner />
            <Exceptional />
            <Doctors />
        </Box>
    );
};

export default Home;