import React, { useState } from 'react';

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
            <form onSubmit={onAuthHandler}>
            <div className='input-fied'>
                <input type='email' name='email' value={email} 
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