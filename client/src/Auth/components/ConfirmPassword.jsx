import React, { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

const ConfirmPassword = (props) => {

    const [ unVisible, setUnVisible ] = useState(true);

    const toggleVisibal = () => {
        setUnVisible(prevState => !prevState);
    }

    return (
        <div className='input-fied'>
            <p className='form-icon'><AiOutlineLock /></p>
            <input type={ unVisible ? 'password' : 'text' } name='password' value={props.value}
            onChange={props.onHandleChange} placeholder='Password...' required/>
            <span onClick={toggleVisibal}>{unVisible ? <i className='iconVisibility'><MdVisibilityOff /></i> : 
            <i className='iconVisibility'><MdVisibility  /></i> }</span>
        </div>       
    )
}

export default ConfirmPassword;