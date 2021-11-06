import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Register = () => {
    const { user, isLoading, msg, registerUser } = useAuth();
    const history = useHistory();
    const [registerData, setRegisterData] = useState({})
    const handleOnBlur = e => {
        const filed = e.target.name;
        const value = e.target.value
        //set input all data in a state
        const newLoginData = { ...registerData }
        newLoginData[filed] = value;
        setRegisterData(newLoginData);

    }
    const handleRegister = e => {
        if (registerData.password !== registerData.confirmPassword) {
            alert('password Not same')
            return;
        }
        registerUser(registerData, history);



        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8, textAlign: 'center' }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    <Typography sx={{ color: '#ff0000' }} variant='h5'>
                        {msg}
                    </Typography>
                    {
                        user?.email && <Alert severity="success">Congrats!! User Created successfully</Alert>
                    }
                    {!isLoading && <form onSubmit={handleRegister}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name='password'
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Retype your Password"
                            type="password"
                            name='confirmPassword'
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} variant='contained' type='submit'>Register</Button>

                        <NavLink style={{ textDecoration: 'none' }} to="/login"><Button variant="text">Already Register? Please Login!</Button></NavLink>
                    </form>}
                    {isLoading && <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="Login page placeholder images" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;