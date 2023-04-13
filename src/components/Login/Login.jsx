import React from 'react';
import {GoogleAuthProvider, getAuth} from 'firebase/auth';
import app from '../../firebase/firebase.init';

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignUp=()=>{
        console.log('google mama')
    }

    return (
        <div>
           <button onClick={handleGoogleSignUp}>Google Login</button> 
        </div>
    );
};

export default Login;