import React, { useState } from 'react';
import axios from '../../axios';

import CheckUser from '../components/CheckUser';
import Registration from '../components/Registration';
import Login from '../components/Login';

const AuthPage = () => {

    const [ onLogin, setOnLogin ] = useState(null);
    const [ newEmail, setNewEmail ] = useState('');
    const [ result, setResult ] = useState(null);

    //Check if Email exist in DB
    const onAuthHandler = async (email) => {
        await axios.post('/user/check-email', email,
        { 'Content-Type': 'application/json' })
                   .then(res => {
                    setResult(res.data.result)
                   }).catch(err => {
                       console.log(err)
                   });
        onLoginHandler();
    };

    const onLoginHandler = () => {
        if(result){
            setOnLogin('login');
        }
        else{
            setOnLogin('register');
        }
    };



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