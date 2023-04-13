import React, { useState } from 'react';
import app from '../../firebase/firebase.init';
import {GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut} from 'firebase/auth';

const Login = () => {
    const [user,setUser] = useState(null)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const handleGoogleSignUp=()=>{
        signInWithPopup(auth,googleProvider)
        .then((result) =>{
            const LoginUp=result.user;
            console.log(LoginUp);
            setUser(LoginUp)
        }).catch(error =>{
            console.log('mama')
        })
    }

    const handleGithubSigUp=()=>{
        signInWithPopup(auth,githubProvider)
        .then(result =>{
            const logUser = result.user;
            console.log(logUser);
            setUser(logUser)
        }).catch(error =>{
            console.log('git hub')
        })
    }
    const handleSignOut=()=>{
        signOut(auth)
        .then(result =>{
            console.log(result);
            setUser(null)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div>
            {/* user ? log out  : sign out  */}
            {user ? 
            <button onClick={handleSignOut}>Sign Out</button>:
            <div>
                <button onClick={handleGoogleSignUp}>Google Login</button>
                <button onClick={handleGithubSigUp}>Gitub Login</button>
            </div>

            }
            {user && <div>
                <h2>Name:{user.displayName}</h2>
            </div>
            }
        </div>
    );
};

export default Login;