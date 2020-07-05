import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../axios';

import CheckUser from '../components/CheckUser';
import Registration from '../components/Registration';
import Login from '../components/Login';

const AuthPage = () => {

    const history = useHistory()
    const [ onLogin, setOnLogin ] = useState(null);
    const [ newEmail, setNewEmail ] = useState('');
    const [ result, setResult ] = useState(null);

    //Check if Email exist in DB
    const onAuthHandler = async (email) => {
        await axios.post('/users/check-email', email,
        { 'Content-Type': 'application/json' })
                   .then(res => {
                    setResult(res.data.result)
                   }).catch(err => {
                       console.log(err)
                   });
        onLoginHandler();
    };

    const registerUser = (user) => {
        axios.post('/users/register', user,
        { 'Content-Type': 'application/json' })
                   .then(res => {
                        console.log(res.data.userId)
                        history.push('/storages')
                   }).catch(err => {
                        console.log(err)
                   });
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
                : onLogin === 'register' ? <Registration email={newEmail} 
                                            registerUser={registerUser}/> 
                : null
            }         
        </div>
    )
}

export default AuthPage;