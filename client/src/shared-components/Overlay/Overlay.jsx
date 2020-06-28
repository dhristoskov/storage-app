import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {

    return ReactDOM.createPortal(
        <div className='overlay' onClick={props.removeModal}></div>,
        document.getElementById('overlay')
      );
}

export default Backdrop;