import React, { useState } from 'react';
import { Alert, Container, Grid, Typography } from '@mui/material';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        fee: 30,
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        fee: 30,
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        fee: 30,
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        fee: 30,
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        fee: 30,
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        fee: 30,
        space: 10,
    },
]
const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container sx={{ textAlign: 'center' }}>
            <Typography variant="h5" sx={{ color: 'info.main', fontWeight: 300, mb: 3 }}>Available appointment on {date.toDateString()}</Typography>
            {/* success status */}
            {
                bookingSuccess && <Alert severity="success">Congrats!! Appointment Booked successfully</Alert>
            }
            <Grid container spacing={2}>
                {bookings.map(booking => <Booking
                    key={booking.id}
                    booking={booking}
                    date={date}
                    setBookingSuccess={setBookingSuccess}
                ></Booking>)}
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;