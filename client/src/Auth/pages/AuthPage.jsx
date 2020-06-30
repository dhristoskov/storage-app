import React, { useState } from 'react';

import Registration from '../components/Registration';
import Login from '../components/Login';

const User_Data = [ 'test@test.com', 'mike@mail.com' ];

const AuthPage = () => {

    const [ onLogin, setOnLogin ] = useState(null)
    const [ email, setEmail ] = useState('');


    const onAuthHandler = (e) => {
        e.preventDefault();
        const result = User_Data.includes(email);

        if(result){
            setOnLogin('login');
        }
        else{
            setOnLogin('register');
        }
    }



    return (
        <div>
            {
                onLogin === null ?
                <form onSubmit={onAuthHandler}>
                    <input type='email' name='email' value={email} onChange={e => setEmail(e.target.value)}/>
                    <input type='submit' value='submit' />
                </form>
                : null
            }
            {
                onLogin === 'login' ? <Login email={email} /> 
                : onLogin === 'register' ? <Registration email={email} /> 
                : null
            }           
        </div>
    )
}

export default AuthPage;