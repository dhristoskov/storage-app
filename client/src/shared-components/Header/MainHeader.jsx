import React, { useState, Fragment } from 'react';
import { AiOutlineLogin } from 'react-icons/ai'

import Navigation from './Navigation';
import NavButton from './NavButton';
import LowerHeader from './LowerHeader';

const MainHeader = () => {

    const [ toggleNav, setToggleNav ] = useState(false);
    const [ toggleStorages, setToggleStorages ] = useState(false);

    const toggleNavigation = () => {
        setToggleNav(prevState => !prevState)
    };

    const toggleStoragesView= () => {
        setToggleStorages(prevState => !prevState)
    }

    return(
        <Fragment>
            <div className='main-header'>
                <NavButton toggleNavigation={toggleNavigation}/>
                {
                    toggleNav &&  <Navigation />
                }          
                <p className='logo'>Logo</p>
                <div className='login'><AiOutlineLogin /></div>
            </div>
            <LowerHeader toggleStoragesView={toggleStoragesView}
                         toggleStorages={toggleStorages}/>    
        </Fragment>
    )
}

export default MainHeader;