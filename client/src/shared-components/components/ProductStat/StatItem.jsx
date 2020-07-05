import React from 'react';

const StatItem = (props) => {

    return(
        <div className='price-wrapper'>
            <p className='price-bar' style={{height: ((props.price - props.low)*100)+'%'}}>{props.price}</p>
            <p className='price-data'>{props.time}</p>
        </div>
    )

}

export default StatItem;