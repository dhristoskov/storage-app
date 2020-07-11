import React, { Fragment } from 'react';

import Overlay from '../Overlay/Overlay';

const StatsModal = (props) => {

    //Stats modal for product information pop-up
    return(
        <Fragment>
            <Overlay/>
            <div className='stats-modal'>
                {props.children}
            </div>
        </Fragment>
    )
}

export default StatsModal