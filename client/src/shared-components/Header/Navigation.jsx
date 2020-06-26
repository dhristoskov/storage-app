import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {

    return(
        <div style={{display: 'flex', listStyle: 'none'}}>
            <li><NavLink to='/list' >home</NavLink></li>
            <li>create</li>
            <li>all lists</li>
            <li>login</li>
        </div>
    )
}

export default Navigation