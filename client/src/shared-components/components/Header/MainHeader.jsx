import React, { useState, Fragment, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';

import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import Navigation from './Navigation';
import NavButton from './NavButton';
import LowerHeader from './LowerHeader';
import Logo from './Logo';

const MainHeader = () => {

    const { isLoggedIn, logout } = useContext(AuthContext)
    const [ toggleNav, setToggleNav ] = useState(false);
    const history = useHistory();

    //Show Nav-Bar menu
    const toggleNavigation = () => {
        setToggleNav(prevState => !prevState)
    };

    //Logout handler
    const onLogout = () => {
        history.push('/');
        setToggleNav(false);
        logout();
    }

    return(
        <Fragment>
            <div className='main-header'>
                <NavButton toggleNavigation={toggleNavigation}/>
                {
                    toggleNav &&  <Navigation />
                }          
                <Logo />
                {
                    !isLoggedIn 
                    ? <div className='auth-btn'><NavLink to='/auth'><AiOutlineLogin /></NavLink></div>
                    : <div className='auth-btn' onClick={onLogout}><NavLink to='/'><AiOutlineLogout /></NavLink></div>            
                }
            </div>
            <LowerHeader />    
        </Fragment>
    )
}

export default MainHeader;