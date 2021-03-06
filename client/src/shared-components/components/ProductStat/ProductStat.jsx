import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import StatItem from './StatItem';
//dummy statistic data
import { STAT } from '../../utils/data';

const ProductStat = (props) => {

    //Lower and Highest product price range
    const lowerPrice = Math.min(...STAT.map(it => it.price));
    const highestPrice = Math.max(...STAT.map(it => it.price));

    return (
        <div className='stats-wrapper'>
            {
                STAT.map(product => {
                    return (
                        <StatItem key={product.id}
                        price={product.price}
                        time={product.time}
                        low={lowerPrice}/>
                        )
                    })
                }
            <p className='close-modal' onClick={props.hideInfoHandler}>
                <AiOutlineCloseCircle /></p>
            <div className='price-range'>
                    <p>Lowest Price<span> {lowerPrice} </span>€</p>
                    <p>Heiest Price<span> {highestPrice} </span>€</p>
            </div>
        </div>
    )
}

export default ProductStat;