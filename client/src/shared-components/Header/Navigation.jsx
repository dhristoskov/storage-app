import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {

    return(
        <div style={{display: 'flex', listStyle: 'none'}}>
            <li><NavLink to='/' >home</NavLink></li>
            <li><NavLink to='/list'>create</NavLink></li>
            <li><NavLink to='/storage'>shops</NavLink></li>
            <li>all lists</li>
            <li>login</li>
        </div>
    )
}

export default Navigation