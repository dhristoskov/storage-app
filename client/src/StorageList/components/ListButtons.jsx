import React from 'react';
import { MdViewList, MdViewModule } from 'react-icons/md'

const ListButtons = (props) => {

    return (
        <div className='view'>
            <p onClick={props.showSimpleList}><MdViewList /></p>
            <p onClick={props.showDetailedList}><MdViewModule /></p>
        </div>
    )

}

export default ListButtons;