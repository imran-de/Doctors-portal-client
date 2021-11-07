import { TextField, Button, Alert } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const { token } = useAuth();
    const [msg, setMsg] = useState('')

    const handleOnChange = e => {
        const email = e.target.value;
        setEmail(email);
    }
    const handleAdminSubmit = e => {
        e.preventDefault();
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.modifiedCount) {
                    setSuccess(true)
                    setMsg(result?.message)
                } else {
                    setMsg(result?.message)
                }
            })
    }

    return (
        <div>
            <h2>Make an Admin</h2>
            {
                success ? <Alert severity="success">Congrats!! made admin successfully</Alert>
                    :
                    msg && <Alert severity="error">{msg}</Alert>
            }
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="email"
                    label="Admin Email"
                    name="email"
                    onBlur={handleOnChange}
                    variant="standard" />
                <Button variant='contained' type='submit'>Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;