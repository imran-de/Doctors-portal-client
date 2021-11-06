import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
    const { user, isLoading, loginUser, signInWithGoogle, msg } = useAuth();

    const [loginData, setLoginData] = useState({})
    const location = useLocation();
    const history = useHistory();
    const handleOnChange = e => {
        const filed = e.target.name;
        const value = e.target.value
        //set input all data in a state
        const newLoginData = { ...loginData }
        newLoginData[filed] = value;
        setLoginData(newLoginData);

    }
    const handleLogin = e => {

        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8, textAlign: 'center' }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <Typography sx={{ color: '#ff0000' }} variant='h5'>
                        {msg}
                    </Typography>
                    {
                        user?.email && <Alert severity="success">Congrats!! user login successfully</Alert>
                    }
                    {!isLoading && <form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="email"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="password"
                            label="Your Password"
                            type="password"
                            name='password'
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} variant='contained' type='submit'>Login</Button>

                        <NavLink style={{ textDecoration: 'none' }} to="/register"><Button variant="text">New user? Please Register!</Button></NavLink>
                    </form>
                    }
                    <Box sx={{ textAlign: 'center' }}>--------------------------------</Box>

                    <Box sx={{ textAlign: 'center' }}>
                        <Button onClick={handleGoogleSignIn} variant='contained'>Sign In With Google</Button>
                    </Box>

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

export default Login;