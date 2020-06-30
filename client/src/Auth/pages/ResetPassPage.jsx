import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';

const ResetPassPage = () => {

    return(
        <div className='auth-container'>
            <h3>Reset password</h3>
            <p>We will send you reset link per E-mail</p>
            <form className='auth-form'>
                <div className='input-fied'>
                    <p className='form-icon'><AiOutlineMail /></p>
                    <input type="email" name='email' placeholder='E-mail...' required/>        
                </div>
                <div className='input-fied'>     
                    <input type="submit" value='Reset Password'/>
                </div>
            </form>
        </div>
    )
}

export default ResetPassPage;