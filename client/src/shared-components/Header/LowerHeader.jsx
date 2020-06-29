import React from 'react';

const LowerHeader = (props) => {

    return (
        <div className='lower-header'>
            <p className='welcome'>Hello, <span>( Guest )</span></p>
            <p className='storage-btn' onClick={props.toggleStoragesView}>Storages</p>
            {
                props.toggleStorages 
                && <div className='storage-options'>
                        <p>First</p>
                        <p>Second</p>
                        <p>Third</p>
                   </div>
            }
        </div>
    )
}

export default LowerHeader;