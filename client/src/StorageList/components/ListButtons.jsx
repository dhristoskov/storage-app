import React from 'react';
import { BsListUl, BsGrid3X2 } from 'react-icons/bs'

const ListButtons = (props) => {

    return (
        <div className='view'>
            <p onClick={props.showSimpleList}><BsListUl /></p>
            <p onClick={props.showDetailedList}><BsGrid3X2 /></p>
        </div>
    )

}

export default ListButtons;