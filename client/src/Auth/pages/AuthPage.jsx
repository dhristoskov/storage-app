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

    //Check if Email exist in DB
    const onAuthHandler = async (email) => {
        await axios.post('/users/check-email', email,
        { 'Content-Type': 'application/json' })
                   .then(res => {
                    onLoginHandler(res.data.result)
                   }).catch(err => {
                       console.log(err)
                   });    
    };

    //Register new User
    const registerUser = async (user) => {
        await axios.post('/users/register', user,
        { 'Content-Type': 'application/json' })
                   .then(res => {
                        console.log(res.data.token)
                        history.push('/storages')
                   }).catch(err => {
                        console.log(err)
                   });
    };

    //Log-in existing User
    const loginUser = async (user) => {
        await axios.post('/users/login', user,
        { 'Content-Type': 'application/json' })
                   .then(res => {
                        console.log(res.data.token)
                        history.push('/storages')
                   }).catch(err => {
                        console.log(err)
                   });
    };

    const onLoginHandler = (result) => {
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
                onLogin === 'login' ? <Login email={newEmail}
                                        loginUser={loginUser}/> 
                : onLogin === 'register' ? <Registration email={newEmail} 
                                            registerUser={registerUser}/> 
                : null
            }         
        </div>
    )
}

export default AuthPage;