import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';

import ConfirmPassword from './ConfirmPassword';
import EmailField from './EmailField';
import { productValidation } from '../../shared-components/utils/productValidation';

const Registration = (props) => {

    const [ errors, setErrors ] = useState({});
    const [ register, setRegister ] = useState({
        username: '',
        email: props.email,
        password: '',
        password2: ''
     });

    const { username, email, password, password2 } = register;

    const onChangeHandler = (e) => {
        //Validate entry data for username, email and password
        let error = productValidation(e.target.name, e.target.value);
        setErrors(error);
        setRegister({...register, [ e.target.name ]: e.target.value})
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(password !== password2){
            setErrors({msg:'Passwords and confirm password does not match'})
        }else{
            props.registerUser(register)    
            setRegister({
                username: '',
                email: '',
                password: '',
                password2: ''
            })
        };
    };

    return (
        <div className='auth-container'>
            <h3>Registration</h3>
            <p>Your E-mail is not yet registered</p>
            <p>Before using the app, you need to create an account</p>
            <form className='auth-form' onSubmit={onSubmitHandler}>

                <div className='input-fied'>
                    <p className='form-icon'><AiOutlineUser /></p>
                    <input type='text' name='username' value={username} placeholder='Name...' 
                    onChange={onChangeHandler} required/>
                    {errors.username && <p className='errors'>{errors.username}</p>}
                </div>

                    <EmailField onChangeHandler={onChangeHandler} name={'email'} value={email}
                    errors={errors.email} required/>

                    <ConfirmPassword onChangeHandler={onChangeHandler} name={'password'} value={password}
                    errors={errors.password} required/>

                <div className='input-fied'>
                    <input type="password" name='password2' value={password2} placeholder='Confirm password...' 
                    onChange={onChangeHandler} required/>
                    {errors.password2 && <p className='errors'>{errors.password2}</p>}
                </div>

                <div className='input-fied'>
                    <input type="submit" value='Register'/>
                    {errors.msg && <p className='errors'>{errors.msg}</p>}
                </div>
            </form>
        </div>
    )
}

export default Registration;