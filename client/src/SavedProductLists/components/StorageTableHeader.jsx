import React from 'react';
import { FaSortAmountDownAlt, FaSortAmountDown} from 'react-icons/fa';

const StorageTableHeader = () => {

    return(
        <div className='storage-table-header'>
            <div className='name'>
                <p>Product</p>
                <div className='order'>
                    <p><FaSortAmountDownAlt /></p>
                    <p><FaSortAmountDown /></p>
                </div>
            </div>
            <div className='price'>
                <p>Price</p>
                <div className='order'>
                    <p><FaSortAmountDownAlt /></p>
                    <p><FaSortAmountDown /></p>
                </div>
            </div>
            <div className='quantity'><p>Quantity</p></div>
            <div className='total'><p>Total</p></div>
        </div>
    )
}

export default StorageTableHeader;