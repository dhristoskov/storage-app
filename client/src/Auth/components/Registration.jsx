import React from 'react';
import { NavLink } from 'react-router-dom';

const Registration = () => {

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
                    <input type="email" name='email' placeholder='E-mail...' required/>        
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