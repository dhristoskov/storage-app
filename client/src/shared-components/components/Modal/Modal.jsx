import React, { Fragment } from 'react';

import Overlay from '../Overlay/Overlay';

const Modal = (props) => {

    //Pop-up window with backdrop
    return(
        <Fragment>
            <Overlay removeModal={props.removeModal}/>
            <div className='modal'>
                {props.children}
            </div>
        </Fragment>
    )
}

export default Modal