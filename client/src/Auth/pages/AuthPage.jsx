import React, { useState, Fragment, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../axios';

import CheckUser from '../components/CheckUser';
import Registration from '../components/Registration';
import Login from '../components/Login';
import Loader from '../../shared-components/components/Loader/Loader';
import { AuthContext } from '../../shared-components/contexts/AuthContext/AuthContext';
import InfoMessage from '../../shared-components/components/DeleteWarning/InfoMessage';
import Modal from '../../shared-components/components/Modal/Modal';

const AuthPage = () => {

    const history = useHistory();
    const [ isLoading, setIsLoading ] = useState(false);
    const [ onLogin, setOnLogin ] = useState(null);
    const [ newEmail, setNewEmail ] = useState('');
    const { login } = useContext(AuthContext);
    const [ errorMsg, setErorrMsg ] = useState('');

    //Check if Email exist in DB
    const onAuthHandler = async (email) => {
        setIsLoading(true);
        await axios.post('/users/check-email', email,
        { 'Content-Type': 'application/json' })
                   .then(res => {
                    setIsLoading(false);
                    onLoginHandler(res.data.result)
                   }).catch(err => {
                    setErorrMsg(err.response.data);
                    setIsLoading(false);
                   });    
    };

    //Register new User
    const registerUser = async (user) => {
        setIsLoading(true);
        await axios.post('/users/register', user,
        { 'Content-Type': 'application/json' })
                   .then(res => {
                        setIsLoading(false);
                        login(res.data.userId, res.data.token, res.data.name);
                        history.push('/storages')
                   }).catch(err => {
                        setErorrMsg(err.response.data);
                        setIsLoading(false);
                   });
    };

    //Log-in existing User
    const loginUser = async (user) => {
        setIsLoading(true);
        await axios.post('/users/login', user,
        { 'Content-Type': 'application/json' })
                   .then(res => {
                        setIsLoading(false);
                        login(res.data.userId, res.data.token, res.data.name);
                        history.push('/storages')
                   }).catch(err => {
                        setErorrMsg(err.response.data);
                        setIsLoading(false);
                   });
    };

    //Set login or register if e-mail exist in DB
    const onLoginHandler = (result) => {
        if(result){
            setOnLogin('login');
        }
        else{
            setOnLogin('register');
        }
    };

     //Remove info message
     const hideDeleteWarning = () => {
       setErorrMsg(null)
    };

    return (
        <Fragment>
            {
                errorMsg &&   
                <Modal removeModal={hideDeleteWarning}>
                    <InfoMessage msg={errorMsg.msg}
                    cancel={hideDeleteWarning}/>
                </Modal>
            }
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