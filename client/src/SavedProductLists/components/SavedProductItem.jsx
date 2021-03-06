import React, { useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit, AiOutlinePercentage, AiOutlineCheckCircle } from 'react-icons/ai';

const SavedProductItem = (props) => {

    const [ toggledPrice, setToggledPrice ] = useState(false);
    const [ toggledTotalPrice, setToggledTotalPrice ] = useState(false);

    //Fix the prices to .00 after decimal point
    const price = parseFloat(props.price).toFixed(2);
    const priceVat = parseFloat(props.priceVat).toFixed(2);
    const totalPrice = parseFloat(props.totalPrice).toFixed(2);
    const totalVat = parseFloat(props.totalVat).toFixed(2);

    //Show/Hide VAT price for a product
    const togglePrice = () => {
        setToggledPrice(prevState => !prevState)
    };

    //Show/Hide VAT total price for a products
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
                <p title='Delete' onClick={props.deleteProductHandler}><AiOutlineDelete /></p>
                <p title='Edit' onClick={props.editProductHandler}><AiOutlineEdit /></p>  
                <p title='Done'><AiOutlineCheckCircle /></p>               
            </div>
        </div>
    )
}

export default SavedProductItem;