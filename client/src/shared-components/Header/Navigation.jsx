import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {

    return(
        <div className='navbar'>
            <li><NavLink exact to='/'>home</NavLink></li>
            <li><NavLink to='/list'>create</NavLink></li>
            <li><NavLink to='/storage'>shops</NavLink></li>
            <li><NavLink to='/all-lists'>all lists</NavLink></li>
            <li>login</li>
        </div>
    )
}

export default Navigation