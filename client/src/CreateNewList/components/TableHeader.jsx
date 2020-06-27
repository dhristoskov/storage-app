import React from 'react';
//import { AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai';

const TableHeader = () => {

    //Sort the array TODO

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