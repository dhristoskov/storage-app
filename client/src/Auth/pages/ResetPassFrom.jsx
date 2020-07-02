import React, { useState } from 'react';

import ConfirmPassword from '../components/ConfirmPassword';

const ResetPassForm = () => {

    const [reset, setReset ] = useState({
        password: '',
        password2: '',
        //token: token <-- ToDo
    });

    const { password, password2 } = reset;

    const onChangeHandler = (e) => {
        e.preventDefault();
        setReset({...reset, [e.target.name]: e.target.value});
    };

    const onSubmitHandle = (e) => {
        e.preventDefault();
        console.log(reset)
        setReset({
            password: '',
            password2: ''
        });
    };

    return(
        <div className='auth-container'>
            <h3>Reset Passowrd Form</h3>
            <p>Enter your new password</p>
            <form className='auth-form' onSubmit={onSubmitHandle}>
                <div className='input-fied'>
                    <ConfirmPassword onChangeHandler={onChangeHandler} name={'password'} value={password}/>
                </div>
                <div className='input-fied'>
                    <input type="password" name='password2' value={password2} placeholder='Confirm password...' 
                    onChange={onChangeHandler} required/>
                </div>
                <div className='input-fied'>
                    <input type="submit" value='Update Password'/>        
                </div>
            </form>
        </div>
    )
}

export default ResetPassForm;