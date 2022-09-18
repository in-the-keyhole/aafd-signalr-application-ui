import React from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../../authConfig';
import Button from '@mui/material/Button';

export const SignInButton = (props) => {
    const { instance } = useMsal();

    const handleLogin = () => {
        instance.loginPopup(loginRequest)
                    .then(authenticationResponse => {
                        props.setIdToken(authenticationResponse.idToken);
                    })
                    .catch(e => console.error(e));
    };

    return (
        <Button variant="contained" color="secondary" onClick={() => handleLogin()}>Login</Button>
    );
};

