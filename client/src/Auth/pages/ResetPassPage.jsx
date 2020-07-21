import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import axios from '../../axios';

import EmailField from '../components/EmailField';
import { productValidation } from '../../shared-components/utils/productValidation';

const ResetPassPage = () => {

    const history = useHistory();
    const [ errors, setErrors ] = useState({});
    const [ emailToReset, setEmail ] = useState({ email: ''});

    const { email } = emailToReset;

    const onChangeHandler = (e) => {
        let error = productValidation(e.target.name, e.target.value);
        setErrors(error)
        setEmail({...emailToReset, [ e.target.name ]: e.target.value })
    };

    //Submit reset email
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        await axios.post('/emails/reset', emailToReset, 
        {'Content-Type': 'application/json'})
            .then(res => {     
                console.log('done')          
            }).catch(err => {
                console.log(err);
        });
        setEmail({email: ''});
        history.push('/');
    };

    //Back to Email Check Page
    const backToCheckPage = () => {
        history.push('/auth')
    }

    return(
        <div className='auth-container'>
            <h3>Reset password</h3>
            <p>We will send you reset password link per E-mail</p>
            <form className='auth-form' onSubmit={onSubmitHandler}>
                <EmailField onChangeHandler={onChangeHandler} name={'email'} value={email} 
                errors={errors.email} required/>
                <div className='input-fied'>     
                    <input type="submit" value='Reset Password'/>
                </div>
            </form>   
            <p className='back-login' onClick={backToCheckPage}>
                <AiOutlineArrowLeft /><span>Back to Log-in page</span></p>       
        </div>
    )
}

export default ResetPassPage;