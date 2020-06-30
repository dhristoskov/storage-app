import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'

const Login = (props) => {

    const [ login, setLogin ] = useState({
        email: props.email,
        password: ''
    });

    const { email, password } = login;

    const onChangeHandler = (e) => {
        setLogin({...login, [ e.target.name]: e.target.value})
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(login);       
        setLogin({
            email: '',
            password: ''
        });
    };

    return (
        <div className='auth-container'>
            <h3>Log-in</h3>
            <p>Enter your credentials to log-in</p>
            <form className='auth-form' onSubmit={onSubmitHandler}>
                <div className='input-fied'>
                    <input type="email" name='email' value={email} placeholder='E-mail...'
                    onChange={onChangeHandler} required/>             
                </div>
                <div className='input-fied'>
                    <input type="password" name='password' value={password} placeholder='Password...'
                    onChange={onChangeHandler} required/>
                </div>
                <div className='input-fied'>
                    <input type="submit" value='Log-in'/>
                </div>            
            </form>
            <p className='psw-question'><NavLink to='/'>Forgotten password?</NavLink></p>
        </div>
    )

}

export default Login;