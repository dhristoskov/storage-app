import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'

const Login = (props) => {

    const [ email, setEmail ] = useState(props.email);

    return (
        <div className='auth-container'>
            <h3>Log-in</h3>
            <p>enter your credentials to log-in</p>
            <form className='auth-form'>
                <div className='input-fied'>
                    <input type="email" name='email' value={email} placeholder='E-mail...'
                        onChange={e => setEmail(e.target.value)} required/>             
                </div>
                 <div className='input-fied'>
                    <input type="password" name='password' placeholder='Password...' required/>
                </div>
                <div className='input-fied'>
                    <input type="submit" value='Log-in'/>
                </div>            
            </form>
            <p className='psw-question'><NavLink to='/'>Forgotten password?</NavLink></p>
        </div>
    )

}

export default Login;