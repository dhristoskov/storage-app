import React, { useState } from 'react';

import EmailField from './EmailField';
import { productValidation } from '../../shared-components/productValidation';
const User_Data = [ 'test@test.com', 'mike@mail.com' ];

const CheckUser = (props) => {

    const [ errors, setErrors ] = useState({});
    const [ emailToCheck, setEmail ] = useState({
        email: ''
    });

    const { email } = emailToCheck;

    const onChangeHandler = (e) => {
        let error = productValidation(e.target.name, e.target.value);
        setErrors(error)
        setEmail({...emailToCheck, [ e.target.name]: e.target.value})
    };

    const onAuthHandler = (e) => {
        e.preventDefault();
        const result = User_Data.includes(email);
        props.onAuthHandler(result);
        props.setNewEmail(emailToCheck.email)
        setEmail({
            email: ''
        });
    }

    return (
        <div className='auth-container'>
            <h3>Login/ Registration</h3>
            <p>Enter E-mail to log-in or to start Registration process</p>
            <form className='auth-form' onSubmit={onAuthHandler}>
            <EmailField onChangeHandler={onChangeHandler} name={'email'} value={email}
                    errors={errors.email} required/>
            <div className='input-fied'>
                <input type='submit' value='submit' />
            </div>
            </form>
        </div>
    )

} 

export default CheckUser;