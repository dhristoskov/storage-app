import React, { useState } from 'react';

import CheckUser from '../components/CheckUser';
import Registration from '../components/Registration';
import Login from '../components/Login';

const AuthPage = () => {

    const [ onLogin, setOnLogin ] = useState(null);
    const [ newEmail, setNewEmail ] = useState('');

    const onAuthHandler = (result) => {
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
                <CheckUser onAuthHandler={onAuthHandler} 
                               setNewEmail={setNewEmail}/>
                : null
            }
            {
                onLogin === 'login' ? <Login email={newEmail} /> 
                : onLogin === 'register' ? <Registration email={newEmail} /> 
                : null
            }           
        </div>
    )
}

export default AuthPage;