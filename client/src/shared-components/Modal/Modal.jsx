import React from 'react';

const Modal = (props) => {

    return(
        <div className='modal-wrapper'>
            {props.children}
        </div>
    )
}

export default Modal