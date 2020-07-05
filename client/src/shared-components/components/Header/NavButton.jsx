import React from 'react';

const NavButton = (props) => {

    return (
        //Hamburger menu component
        <div className='menu-button' onClick={props.toggleNavigation}>
            <div className='one'/>
            <div className='two'/>
            <div className='three'/>
        </div>
    )
}

export default NavButton;