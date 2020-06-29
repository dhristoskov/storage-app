import React from 'react';
import { NavLink } from 'react-router-dom'

const Login = () => {

    return (
        <div className='auth-container'>
            <h3>Log-in</h3>
            <p>enter your credentials to log-in</p>
            <form className='auth-form'>
                <div className='input-fied'>
                    <input type="email" name='email' placeholder='E-mail...' required/>        
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