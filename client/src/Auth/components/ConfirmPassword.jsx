import React, { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
import { AiOutlineLock } from 'react-icons/ai';

const ConfirmPassword = (props) => {

    const [ unVisible, setUnVisible ] = useState(true);

    const toggleVisibal = () => {
        setUnVisible(prevState => !prevState);
    }

    return (
        <div className='input-fied'>
            <p className='form-icon'><AiOutlineLock /></p>
            <div className='iconVisibility' onClick={toggleVisibal}>{unVisible ? <p><MdVisibilityOff /></p> : 
            <p><MdVisibility /></p> }</div>
            <input type={ unVisible ? 'password' : 'text' } name={props.name} value={props.value}
            onChange={props.onChangeHandler} placeholder='Password...' required/>
        </div>       
    )
}

export default ConfirmPassword;