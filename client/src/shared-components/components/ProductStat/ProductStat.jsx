import React from 'react';

import StatItem from './StatItem';
import { STAT } from '../data';

const ProductStat = () => {

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
           <p>{lowerPrice}</p>
           <p>{highestPrice}</p>
       </div>
    )
}

export default ProductStat;