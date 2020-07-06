import React, { useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineLogin } from 'react-icons/ai';

import Navigation from './Navigation';
import NavButton from './NavButton';
import LowerHeader from './LowerHeader';
import Logo from './Logo';

const MainHeader = () => {

    const [ toggleNav, setToggleNav ] = useState(false);

    //Show Nav-Bar menu
    const toggleNavigation = () => {
        setToggleNav(prevState => !prevState)
    };

    return(
        <Fragment>
            <div className='main-header'>
                <NavButton toggleNavigation={toggleNavigation}/>
                {
                    toggleNav &&  <Navigation />
                }          
                <Logo />
                <div className='login'><NavLink to='/auth'><AiOutlineLogin /></NavLink></div>
            </div>
            <LowerHeader />    
        </Fragment>
    )
}

export default MainHeader;