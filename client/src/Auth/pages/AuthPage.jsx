import React, { useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../axios';

import CheckUser from '../components/CheckUser';
import Registration from '../components/Registration';
import Login from '../components/Login';
import Loader from '../../shared-components/components/Loader/Loader';

const AuthPage = () => {

    const history = useHistory();
    const [ isLoading, setIsLoading ] = useState(false);
    const [ onLogin, setOnLogin ] = useState(null);
    const [ newEmail, setNewEmail ] = useState('');

    //Check if Email exist in DB
    const onAuthHandler = async (email) => {
        setIsLoading(true);
        await axios.post('/users/check-email', email,
        { 'Content-Type': 'application/json' })
                   .then(res => {
                    setIsLoading(false);
                    onLoginHandler(res.data.result)
                   }).catch(err => {
                    setIsLoading(false);
                    console.log(err)
                   });    
    };

    //Register new User
    const registerUser = async (user) => {
        setIsLoading(true);
        await axios.post('/users/register', user,
        { 'Content-Type': 'application/json' })
                   .then(res => {
                        setIsLoading(false);
                        console.log(res.data.token)
                        history.push('/storages')
                   }).catch(err => {
                        setIsLoading(false);
                        console.log(err)
                   });
    };

    //Log-in existing User
    const loginUser = async (user) => {
        setIsLoading(true);
        await axios.post('/users/login', user,
        { 'Content-Type': 'application/json' })
                   .then(res => {
                        setIsLoading(false);
                        console.log(res.data.token)
                        history.push('/storages')
                   }).catch(err => {
                        setIsLoading(false);
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
        <Fragment>
            {
                isLoading 
                ? <Loader />
                : <div>
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
            }
        </Fragment>
    )
}

export default AuthPage;