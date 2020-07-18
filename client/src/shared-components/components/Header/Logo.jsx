import React from 'react';
import { useHistory } from 'react-router-dom';

import truck from '../../../assets/truck.svg';

const Logo = (props) => {

    const history = useHistory();

    const moveHome = () => {
        history.push('/')
        props.setToggleNav(false)
    }

    return (
        <img onClick={moveHome} className='logo' src={truck} alt="truck"/>
    )
}

export default Logo;