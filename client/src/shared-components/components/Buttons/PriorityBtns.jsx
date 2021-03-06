import React from 'react';
import { GoArrowDown, GoArrowUp, GoArrowBoth } from 'react-icons/go';

const PriorityBtns = (props) => {

    return (
        //Set a priority to a single product in Product List 
        <div className='priority-btn'>
            <p onClick={() => props.priorityHandler('high')}><GoArrowUp /></p>
            <p onClick={() => props.priorityHandler('normal')}><GoArrowBoth /></p>
            <p onClick={() => props.priorityHandler('low')}><GoArrowDown /></p>
        </div>
    )

}

export default PriorityBtns