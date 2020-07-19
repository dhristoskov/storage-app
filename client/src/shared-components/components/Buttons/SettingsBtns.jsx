import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

const SettingsBtns = (props) => {

    return (
        <div className='btns-settings'>
            <p onClick={props.deleteProductHandler}><AiOutlineDelete /></p>
            <p onClick={props.editProductHandler}><AiOutlineEdit /></p>                 
        </div>
    )

}

export default SettingsBtns