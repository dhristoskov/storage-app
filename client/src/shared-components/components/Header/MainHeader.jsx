import React, { useState, Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineLogin } from 'react-icons/ai';
import axios from '../../../axios';

import Navigation from './Navigation';
import NavButton from './NavButton';
import LowerHeader from './LowerHeader';

const MainHeader = () => {

    const [ toggleNav, setToggleNav ] = useState(false);
    const [ toggleStorages, setToggleStorages ] = useState(false);
    const [ buttonList, setButtonList ] = useState([]);

    useEffect(() => {
        axios.get('/storage')
             .then(res => {
                setButtonList(res.data.storages)
             }).catch(err => {
                 console.log(err)
             });
    }, []);

    //Show Nav-Bar menu
    const toggleNavigation = () => {
        setToggleNav(prevState => !prevState)
    };

    //Drop-down storage list
    const toggleStoragesView= () => {
        if(buttonList.length){
            setToggleStorages(prevState => !prevState);
        }
    }

    return(
        <Fragment>
            <div className='main-header'>
                <NavButton toggleNavigation={toggleNavigation}/>
                {
                    toggleNav &&  <Navigation />
                }          
                <p className='logo'>Logo</p>
                <div className='login'><NavLink to='/auth'><AiOutlineLogin /></NavLink></div>
            </div>
            <LowerHeader toggleStoragesView={toggleStoragesView}
                         toggleStorages={toggleStorages}
                         buttonList={buttonList}/>    
        </Fragment>
    )
}

export default MainHeader;