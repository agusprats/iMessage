import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';


function Login() {

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .catch((error) => alert(error.message));
    }; 

    return (
        <div className="login">
            <div className="login__logo">
                <img src="data:image/jpeg;base64,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" alt="logo"/>

            <h1>iMessage</h1>

            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>

        
    )
}

export default Login
