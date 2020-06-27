import React from 'react';

const ProductsCounter = (props) => {

    return (
        //Return list entries counter
        <p className='counter'>list contains - {props.products.length} {props.products.length !== 1 
            ? 'entries' 
            : 'entry'}
        </p>  
    )
}

export default ProductsCounter;