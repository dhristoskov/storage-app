import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import ConfirmPassword from './ConfirmPassword';
import EmailField from './EmailField';
import { productValidation } from '../../shared-components/productValidation';

const Login = (props) => {

    const [ errors, setErrors ] = useState({});
    const [ login, setLogin ] = useState({
        email: props.email,
        password: ''
    });

    const { email, password } = login;

    const onChangeHandler = (e) => {
        let error = productValidation(e.target.name, e.target.value);
        setErrors(error)
        setLogin({...login, [ e.target.name]: e.target.value})
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(!errors.email && !errors.password){
            console.log(login);       
            setLogin({
                email: '',
                password: ''
            });
        }
    };

    return (
        <div className='auth-container'>
            <h3>Log-in</h3>
            <p>Enter your credentials to log-in</p>
            <form className='auth-form' onSubmit={onSubmitHandler}>
                <EmailField onChangeHandler={onChangeHandler} name={'email'} value={email}
                    errors={errors.email} required/>
                <ConfirmPassword onChangeHandler={onChangeHandler} name={'password'} value={password}
                    errors={errors.password} required/>
                <div className='input-fied'>
                    <input type="submit" value='Log-in'/>
                </div>            
            </form>
            <p className='psw-question'><NavLink to='/reset-password'>Forgotten password?</NavLink></p>
        </div>
    )

}

export default Login;