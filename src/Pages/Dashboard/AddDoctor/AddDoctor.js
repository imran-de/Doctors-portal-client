import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return alert("you must add an images");
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);
        fetch('https://doctors-portal-4405.herokuapp.com/add-doctor', {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    setSuccess('inserted doctor successfully');
                    console.log(result);
                }
            }).catch(error => {
                setSuccess("sorry, we can't add try latter, maybe the image size matter");
                console.log('Error: ', error);
            })
    }

    return (
        <div>
            <h3>Add A Doctor</h3>
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <form onSubmit={handleSubmit}>
                <TextField
                    style={{ width: '50%' }}
                    label="name"
                    type='text'
                    required
                    onChange={e => setName(e.target.value)}
                    variant="standard"
                /> <br />
                <TextField
                    style={{ width: '50%' }}
                    label="email"
                    type='email'
                    required
                    onChange={e => setEmail(e.target.value)}
                    variant="standard"
                /> <br />
                <Input
                    accept="image/*"
                    type='file'
                    onChange={e => setImage(e.target.files[0])}
                />
                <br />
                <Button variant='contained' type='submit'>Add Doctor</Button>
            </form>
        </div>
    );
};

export default AddDoctor;