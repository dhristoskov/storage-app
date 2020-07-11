import React from 'react';

const StatItem = (props) => {

    return(
        <div className='price-wrapper'>
            <p className='price-data'>{props.time}</p>
            <p className='price-bar' style={{height: ((props.price - props.low)*100)+'%'}}><span>{props.price}</span></p>
        </div>
    )

}

export default StatItem;