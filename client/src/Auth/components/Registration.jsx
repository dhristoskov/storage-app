import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Registration = (props) => {

    const [ register, setRegister ] = useState({
        name: '',
        email: props.email,
        password: '',
        password2: ''
     });

    const { name, email, password, password2 } = register;

    const onChangeHandler = (e) => {
        setRegister({...register, [ e.target.name ]: e.target.value})
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(register)    
        setRegister({
            name: '',
            email: '',
            password: '',
            password2: ''
        });
    };

    return (
        <div className='auth-container'>
            <h3>Registration</h3>
            <p>Before using the app, you need to create an account</p>
            <form className='auth-form' onSubmit={onSubmitHandler}>
                <div className='input-fied'>
                    <input type='text' name='name' value={name} placeholder='Name...' 
                    onChange={onChangeHandler} required/>
                </div>
                <div className='input-fied'>
                    <input type="email" name='email' value={email} placeholder='E-mail...'
                    onChange={onChangeHandler} required/>        
                </div>
                <div className='input-fied'>
                    <input type="password" name='password' value={password} placeholder='Password...' 
                    onChange={onChangeHandler} required/>
                </div>
                <div className='input-fied'>
                    <input type="password" name='password2' value={password2} placeholder='Confirm password...' 
                    onChange={onChangeHandler} required/>
                </div>
                <div className='input-fied'>
                    <input type="submit" value='Register'/>
                </div>
            </form>
            <p className='psw-question'><NavLink to='/'>Already have an account? Log-in instead</NavLink></p>
        </div>
    )
}

export default Registration;