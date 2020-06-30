import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Registration = (props) => {

    const [ email, setEmail ] = useState(props.email);

    // const [ register, setRegister ] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    //     password2: ''
    //  });

    return (
        <div className='auth-container'>
            <h3>Registration</h3>
            <p>Before using the app, you need to create an account</p>
            <form className='auth-form'>
                <div className='input-fied'>
                    <input type='text' name='name' placeholder='Name...' required/>
                </div>
                <div className='input-fied'>
                    <input type="email" name='email' value={email} placeholder='E-mail...'
                    onChange={e => setEmail(e.target.value)} required/>        
                </div>
                <div className='input-fied'>
                    <input type="password" name='password' placeholder='Password...' required/>
                </div>
                <div className='input-fied'>
                    <input type="password" name='password2' placeholder='Confirm password...' required/>
                </div>
                <div className='input-fied'>
                    <input type="submit" value='Register'/>
                </div>
            </form>
            <p className='psw-question'><NavLink to='/'>Already have an account? Log-in instead</NavLink></p>
        </div>
    )

}

export default Registration;