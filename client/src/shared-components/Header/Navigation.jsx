import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {

    return(
        <div className='navbar'>
            <li><NavLink exact to='/'>home</NavLink></li>
            <li><NavLink to='/storage'>Storages</NavLink></li>
            <li><NavLink to='/all-lists'>all lists</NavLink></li>
        </div>
    )
}

export default Navigation