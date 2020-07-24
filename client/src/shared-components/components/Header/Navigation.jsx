import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {

    return(
        //Nav menu component
        <div className='navbar'>
            <li><NavLink exact to='/'>home</NavLink></li>
            <li><NavLink to='/storages'>Storages</NavLink></li>
            <li><NavLink to='/all-lists'>all lists</NavLink></li>
        </div>
    )
}

export default Navigation