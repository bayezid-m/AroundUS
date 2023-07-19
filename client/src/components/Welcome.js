import React from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
    const navigate = useNavigate();

    function login(){
        navigate('/login');
    }

    function register(){
        navigate('/register');
    }


    return (
        <div className='App'>
            <h1>Please login first.</h1>
            <button onClick={login}>Login</button>
            <button onClick={register}>Register</button>
        </div>
    )
}

export default Welcome