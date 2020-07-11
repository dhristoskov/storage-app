import React from 'react';

const StatItem = (props) => {

    return(
        <div className='price-wrapper'>
            <p className='price-bar' style={{height: ((props.price)*100)+'%'}}><span>{props.price}</span></p>
            <p className='price-data'>{props.time}</p>
        </div>
    )

}

export default StatItem;