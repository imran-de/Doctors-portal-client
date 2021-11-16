import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51JvvY9Cz14SZclAcyphkN6ukXUm1z9xnQ1bPWXKHBJGm3DbStUG0vdpwPRlahAhEVV7IOiEe3xL6zHt8bsrOCTYh00fBG4aD2b');

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [appointmentId])
    return (
        <div>
            <h2>Please pay for: {appointment?.patientName} for {appointment?.serviceName}</h2>
            <h4>Pay Amount: ${appointment?.fee}</h4>
            {appointment?.fee && <Elements stripe={stripePromise}>
                <CheckOutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;


/**
 * 1. install stripe and stripe react
 * 2. set publishable key
 * 3. elements
 * 4. checkout form
 * ---------------
 * 5. create payment method
 * 6. create payment intend api
 * 7. load client secret
 * 8. confirm card payment
 * 9. handle user error
 */