import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

export const GetAuthenticatedUserInformationButton = () => {
    const handleClick = () => {
        axios.post('test/TestAuthorization')
                .then(response => {
                    alert(response.data);
                });
    };

    return (
        <Button variant="contained" color="secondary" onClick={() => handleClick()}>Get Authenticated User Information</Button>
    );
};

