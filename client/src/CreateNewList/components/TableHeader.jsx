import React from 'react';
import { FaSortAmountDownAlt, FaSortAmountDown} from 'react-icons/fa';

const TableHeader = (props) => {

    return(
        <div className='table-header'>
            <div className='name'>
                <p>Product</p>
                <div className='order'>
                    <p onClick={props.onAscOrder}><FaSortAmountDownAlt /></p>
                    <p onClick={props.onDescOrder}><FaSortAmountDown /></p>
                </div>
            </div>
            <div className='price'>
                <p>Price</p>
                <div className='order'>
                    <p onClick={props.onLowPrice}><FaSortAmountDownAlt /></p>
                    <p onClick={props.onHighPrice}><FaSortAmountDown /></p>
                </div>
            </div>
            <div className='quantity'><p>Quantity</p></div>
            <div className='storage'><p>Storage</p></div>
            <div className='total'><p>Total</p></div>
        </div>
    )
}

export default TableHeader;