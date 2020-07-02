import React from 'react';

import StatItem from './StatItem';
import { STAT } from '../data';

const ProductStat = () => {

    return (
       <div>
           {
               STAT.map(product => {
                   return (
                           <StatItem key={product.id}
                           price={product.price}
                           time={product.time} />
                   )
               })
           }
       </div>
    )
}

export default ProductStat;