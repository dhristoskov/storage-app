import React, { useState, Fragment } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from '../../axios';

import ConfirmPassword from '../components/ConfirmPassword';
import { productValidation } from '../../shared-components/utils/productValidation';
import Modal from '../../shared-components/components/Modal/Modal';
import InfoMessage from '../../shared-components/components/DeleteWarning/InfoMessage';

const ResetPassForm = () => {

    const { token } = useParams();
    const history = useHistory();
    const [ errorMsg, setErorrMsg ] = useState('');
    const [ errors, setErrors ] = useState({});
    const [reset, setReset ] = useState({
        password: '',
        password2: '',
        token: token
    });

    const { password, password2 } = reset;

    const onChangeHandler = (e) => {
        e.preventDefault();
        let error = productValidation(e.target.name, e.target.value);
        setErrors(error);
        setReset({...reset, [e.target.name]: e.target.value});
    };

    //Reset password token
    const onSubmitHandle = (e) => {
        e.preventDefault();
        if(password !== password2){
            setErrors({msg:'Passwords and confirm password does not match'})
        }else{ 
            axios.post('/emails/update', reset,
            {'Content-Type': 'application/json'})
                .then(res => {
                 history.push('/auth')
                }).catch(err => {
                 setErorrMsg(err.response.data);
                });
            setReset({
                password: '',
                password2: ''
        })};
    };

    //Remove info message
    const hideDeleteWarning = () => {
        setErorrMsg(null)
    };

    return(
        <Fragment>
            {
                errorMsg &&   
                <Modal removeModal={hideDeleteWarning}>
                    <InfoMessage msg={errorMsg.msg}
                    cancel={hideDeleteWarning}/>
                </Modal>
            }
            <div className='auth-container'>
                <h3>Reset Passowrd Form</h3>
                <p>Enter your new password</p>
                <form className='auth-form' onSubmit={onSubmitHandle}>

                    <div className='input-fied'>
                        <ConfirmPassword onChangeHandler={onChangeHandler} name={'password'} value={password}
                        errors={errors.password} required/>
                    </div>

                    <div className='input-fied'>
                        <input type="password" name='password2' value={password2} placeholder='Confirm password...' 
                        onChange={onChangeHandler} required/>
                        {errors.password2 && <p className='errors'>{errors.password2}</p>}
                    </div>
                    
                    <div className='input-fied'>
                        <input type="submit" value='Update Password'/>  
                        {errors.msg && <p className='errors'>{errors.msg}</p>}      
                    </div>
                </form>
            </div>
        </Fragment>

    )
}

export default ResetPassForm;