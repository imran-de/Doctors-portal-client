import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    const linkStyle = {
        textDecoration: 'none', color: '#fff'
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doctors Portal
                    </Typography>
                    <Box className='desktop-menu' sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <Typography sx={{ minWidth: 100 }}>
                            <Link style={linkStyle} to="/">Home</Link>
                        </Typography>
                        <Typography sx={{ minWidth: 100 }}>
                            <Link style={linkStyle} to="/about">About</Link>
                        </Typography>
                        <Typography sx={{ minWidth: 100 }}>
                            <Link style={linkStyle} to="/appointment">Appointment</Link>
                        </Typography>
                        <Typography sx={{ minWidth: 100 }}>
                            <Link style={linkStyle} to="/reviews">Reviews</Link>
                        </Typography>
                        <Typography sx={{ minWidth: 100 }}>
                            <Link style={linkStyle} to="/blog">Blog</Link>
                        </Typography>
                        <Typography sx={{ minWidth: 100 }}>
                            <Link style={linkStyle} to="/contact">Contact Us</Link>
                        </Typography>
                    </Box>
                    {
                        user?.email ?
                            <Box>
                                <Link style={{ textDecoration: 'none', color: '#fff' }} to="/dashboard">Dashboard</Link>
                                <Button onClick={logOut} color="inherit">Logout</Button>
                            </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', color: '#fff' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;