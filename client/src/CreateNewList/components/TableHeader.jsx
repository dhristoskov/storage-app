import React from 'react';

const TableHeader = () => {

    return(
        <div className='table-header'>
            <p className='name'>Product</p>
            <p className='price'>Price</p>
            <p className='quantity'>Quantity</p>
            <p className='storage'>Storage</p>
            <p className='total'>Total</p>
        </div>
    )
}

export default TableHeader;