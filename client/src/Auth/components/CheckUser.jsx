import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';

const User_Data = [ 'test@test.com', 'mike@mail.com' ];

const CheckUser = (props) => {

    const [ email, setEmail ] = useState('');

    const onAuthHandler = (e) => {
        e.preventDefault();
        const result = User_Data.includes(email);
        props.onAuthHandler(result);
        props.setNewEmail(email)
        setEmail('')
    }

    return (
        <div className='auth-container'>
            <h3>Login/ Registration</h3>
            <p>Enter E-mail to log-in or to start Registration process</p>
            <form className='auth-form' onSubmit={onAuthHandler}>
            <div className='input-fied'>
                <p className='form-icon'><AiOutlineMail /></p>
                <input type='email' name='email' value={email} placeholder='E-mail...' 
                onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className='input-fied'>
                <input type='submit' value='submit' />
            </div>
            </form>
        </div>
    )

} 

export default CheckUser;