import React, { useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import axios from '../../axios';

import EmailField from '../components/EmailField';
import { productValidation } from '../../shared-components/utils/productValidation';
import Modal from '../../shared-components/components/Modal/Modal';
import InfoMessage from '../../shared-components/components/DeleteWarning/InfoMessage';

const ResetPassPage = () => {

    const history = useHistory();
    const [ errors, setErrors ] = useState({});
    const [ errorMsg, setErorrMsg ] = useState('');
    const [ emailToReset, setEmail ] = useState({ email: ''});

    const { email } = emailToReset;

    const onChangeHandler = (e) => {
        let error = productValidation(e.target.name, e.target.value);
        setErrors(error)
        setEmail({...emailToReset, [ e.target.name ]: e.target.value })
    };

    //Submit email to reset, and send a recet link
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        await axios.post('/emails/reset', emailToReset, 
        {'Content-Type': 'application/json'})
            .then(res => {     
                history.push('/');         
            }).catch(err => {
                setErorrMsg(err.response.data);
        });
        setEmail({email: ''});
    };

    //Back to Email Check Page
    const backToCheckPage = () => {
        history.push('/auth');
    }

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
        </Fragment>
    )
}

export default ResetPassPage;