import React, { useState } from 'react';
import { AiOutlineDelete, 
    AiOutlineEdit, 
    AiOutlineCheckCircle, 
    AiOutlineUndo } from 'react-icons/ai';
import { FaMoneyBillWave } from 'react-icons/fa';

const SavedProductItem = (props) => {

    const [ toggledPrice, setToggledPrice ] = useState(false);
    const taxes = 20;

    const price = parseFloat(props.price).toFixed(2);
    const totalPrice = parseFloat(price * props.qty).toFixed(2);
    const priceWithVat = parseFloat(props.price * (1 + taxes / 100)).toFixed(2);

    const togglePrice = () => {
        setToggledPrice(prevState => !prevState)
    };

    return(
        <div className='product-wrapper' 
        style={props.isDone ? {background: '#D2DDBB', color: 'white'} : null}>
            <p className='name'>{props.name}</p>
            <p className='price'>{toggledPrice ?  priceWithVat : price } { toggledPrice ? '€/vat' : '€'}
            <span className='vat-icon' onClick={togglePrice}><FaMoneyBillWave/></span></p>
            <p className='quantity'>{props.qty}</p>
            <p className='type'>/ {props.type}</p>
            <p className='total'>{totalPrice} €</p>
            <div className='settings'>
                <p><AiOutlineDelete /></p>
                <p><AiOutlineEdit /></p>
                {
                    props.isDone 
                    ? <p><AiOutlineUndo /></p>
                    : <p><AiOutlineCheckCircle /></p>
                }                         
            </div>
        </div>
    )
}

export default SavedProductItem;