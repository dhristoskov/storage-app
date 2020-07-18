import React, { useState, Fragment, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';

import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import InfoMessage from '../DeleteWarning/InfoMessage';
import Modal from '../../components/Modal/Modal';
import Navigation from './Navigation';
import NavButton from './NavButton';
import LowerHeader from './LowerHeader';
import Logo from './Logo';

const MainHeader = () => {

    const [ showWarning, setShowWarning ] = useState(false);
    const { isLoggedIn, logout } = useContext(AuthContext)
    const [ toggleNav, setToggleNav ] = useState(false);
    const history = useHistory();

    //Logout handler
    const onLogout = () => {
        history.push('/');
        setToggleNav(false);
        logout();
    }

    //Remove info message
    const hideDeleteWarning = () => {
        setShowWarning(false);
    };

    //Show Nav-Bar menu
    const toggleNavigation = () => {
        if(isLoggedIn){
            setToggleNav(prevState => !prevState);
        }else{
            setShowWarning(true)
        }
    };

    return(
        <Fragment>
             {
                showWarning &&   
                <Modal removeModal={hideDeleteWarning}>
                    <InfoMessage msg={'Log-in or Create Account first'}
                    cancel={hideDeleteWarning}/>
                </Modal>
            }
            <div className='main-header'>
                <NavButton toggleNavigation={toggleNavigation}/>
                {
                    toggleNav &&  <Navigation />
                }          
                <Logo setToggleNav={setToggleNav}/>
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