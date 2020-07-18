import React, { useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit, AiOutlinePercentage } from 'react-icons/ai';

const SavedProductItem = (props) => {

    const [ toggledPrice, setToggledPrice ] = useState(false);
    const [ toggledTotalPrice, setToggledTotalPrice ] = useState(false);

    const price = parseFloat(props.price).toFixed(2);
    const priceVat = parseFloat(props.priceVat).toFixed(2);
    const totalPrice = parseFloat(props.totalPrice).toFixed(2);
    const totalVat = parseFloat(props.totalVat).toFixed(2);

    const togglePrice = () => {
        setToggledPrice(prevState => !prevState)
    };

    const toggleTotalPrice = () => {
        setToggledTotalPrice(prevState => !prevState)
    };

    return(
        <div className='product-instorage-wrapper' 
        style={props.isDone ? {background: '#D2DDBB', color: 'white'} : null}>
            <p className='name'>{props.name}</p>
            <p className='price'>{toggledPrice ?  priceVat : price } { toggledPrice ? '€/vat' : '€'}
            <span className='vat-icon' onClick={togglePrice}><AiOutlinePercentage/></span></p>
            <p className='quantity'>{props.qty}</p>
            <p className='type'>/ {props.type}</p>
            <p className='total'>{toggledTotalPrice ?  totalVat : totalPrice } { toggledTotalPrice ? '€/vat' : '€'}
            <span className='total-vat-icon' onClick={toggleTotalPrice}><AiOutlinePercentage/></span></p>
            <div className='settings'>
                <p><AiOutlineDelete /></p>
                <p><AiOutlineEdit /></p>                 
            </div>
        </div>
    )
}

export default SavedProductItem;