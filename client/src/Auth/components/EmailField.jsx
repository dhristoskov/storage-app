import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';

const EmailField = (props) => {

    return (
        <div className='input-fied'>
            <p className='form-icon'><AiOutlineMail /></p>
            <input type="email" name={props.name} value={props.value} placeholder='E-mail...'
            onChange={props.onChangeHandler} required/>     
            { props.errors && <p className='errors'>{props.errors}</p>}   
        </div>
    )

}

export default EmailField;