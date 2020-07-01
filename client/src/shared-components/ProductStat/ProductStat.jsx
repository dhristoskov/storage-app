import React from 'react';

import { STAT } from '../data';

const ProductStat = () => {

    return (
       <div style={{display:'flex', width: '400px', justifyContent:'center', marginTop: '150px'}}>
           {
               STAT.map(product => {
                   return (
                       <div key={product.id} style={{width: '100px'}}>
                           <p style={{width: (product.price*100)+'%', backgroundColor: 'red', transform: 'rotate(90deg)'}}>{product.price}</p>
                           <p>{product.time}</p>
                       </div>
                   )
               })
           }
       </div>
    )
}

export default ProductStat;