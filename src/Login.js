import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
import './App.js';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

    }

    const resister = e => {
        e.preventDefault();

    }

    return (
        <div className='login'>
            <Link to = "/">
            <img className='login--logo' src="https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg" alt="amazon"/>
            </Link>
            <div className='login--container'>
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn} className='login--signButton'>Sign In</button>
                </form>
                <p>
                    By continuing, you agree to Amazon's conditions of Use and privacy Notice, our cookies Notice and our Interest-Based Ads Notice
                </p>
                <button type='submit' onClick={resister} className='login--resisterButton'>Create your Amazon Account</button>
        </div>



        </div>
        
    )
}

export default Login
