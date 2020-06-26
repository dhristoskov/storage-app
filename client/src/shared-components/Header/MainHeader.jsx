import React, { useState } from 'react';
import { AiOutlineLogin } from 'react-icons/ai'

import Navigation from './Navigation';
import NavButton from './NavButton';

const MainHeader = () => {

    const [ toggleNav, setToggleNav ] = useState(false);

    const toggleNavigation = () => {
        setToggleNav(prevState => !prevState)
    }

    return(
        <div className='main-header'>
            <NavButton toggleNavigation={toggleNavigation}/>
            {
                toggleNav &&  <Navigation />
            }          
            <p className='logo'>Logo</p>
            <div className='login'><AiOutlineLogin /></div>
        </div>
    )
}

export default MainHeader;