import React from 'react';
import { GoArrowDown, GoArrowUp, GoArrowBoth } from 'react-icons/go';

const PriorityBtns = () => {

    return (
        <div className='priority-btn'>
            <p><GoArrowUp /></p>
            <p><GoArrowBoth /></p>
            <p><GoArrowDown /></p>
        </div>
    )

}

export default PriorityBtns