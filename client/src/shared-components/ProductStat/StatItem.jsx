import React from 'react';

const StatItem = (props) => {

    return(
        <div className='price-wrapper' style={{width: '200px'}}>
            <p className='price-bar' style={{width: (props.price*100)+'%', 
            backgroundColor: 'red'}}>{props.price}</p>
            <p className='price-data'>{props.time}</p>
        </div>
    )

}

export default StatItem;