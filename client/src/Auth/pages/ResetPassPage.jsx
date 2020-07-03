import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import EmailField from '../components/EmailField';

const ResetPassPage = () => {

    const history = useHistory();
    const [ email, setEmail ] = useState('')

    const onSubmitHandle = (e) => {
        e.preventDefault();
        setEmail('');
        history.push('/')
    };

    return(
        <div className='auth-container'>
            <h3>Reset password</h3>
            <p>We will send you reset link per E-mail</p>
            <form className='auth-form' onSubmit={onSubmitHandle}>
                <EmailField onChangeHandler={ e => setEmail(e.target.value) } name={'email'} value={email} required/>
                <div className='input-fied'>     
                    <input type="submit" value='Reset Password'/>
                </div>
            </form>          
        </div>
    )
}

export default ResetPassPage;