import React, { useState } from 'react';

import ConfirmPassword from '../components/ConfirmPassword';
import { productValidation } from '../../shared-components/productValidation';

const ResetPassForm = () => {

    const [ errors, setErrors ] = useState({});
    const [reset, setReset ] = useState({
        password: '',
        password2: '',
        //token: token <-- ToDo
    });

    const { password, password2 } = reset;

    const onChangeHandler = (e) => {
        e.preventDefault();
        let error = productValidation(e.target.name, e.target.value);
        setErrors(error);
        setReset({...reset, [e.target.name]: e.target.value});
    };

    const onSubmitHandle = (e) => {
        e.preventDefault();
        if(password !== password2){
            setErrors({msg:'Passwords and confirm password does not match'})
        }else{ 
            setReset({
                password: '',
                password2: ''
        })};
        history.push('/') //<-- Remove 
    };

    return(
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
    )
}

export default ResetPassForm;