import React, { useState } from 'react';
import { AiOutlineDelete, 
    AiOutlineEdit, 
    AiOutlineCheckCircle, 
    AiOutlineUndo,
    AiOutlineOrderedList } from 'react-icons/ai'

import PriorityBtns from '../../shared-components/Buttons/PriorityBtns';

const ProductItem = (props) => {

    const [ toggle, setToggle ] = useState(false)

    const price = parseFloat(props.price).toFixed(2);
    //const vatPrice = parseFloat((props.price/100)*20).toFixed(2);   
    const totalPrice = parseFloat(price * props.qty).toFixed(2);

    const togglePriority = () => {
        setToggle(prevState => !prevState)
    }

    return(
        <div className='product-wrapper' 
        style={props.isDone ? {background: '#D2DDBB', color: 'white'} : null}>
            <p className='name'>{props.name}</p>
            <p className='price'>{price} €</p>
            <p className='quantity'>{props.qty}</p>
            <p className='type'>/ {props.type}</p>
            <p className='storage'>{props.storage}</p>
            <p className='total'>{totalPrice} €</p>
            <div className='settings'>
                <p onClick={props.removeProduct}><AiOutlineDelete /></p>
                <p onClick={props.editHandler}><AiOutlineEdit /></p>
                {
                    props.isDone 
                    ? <p onClick={props.isUndoneHandler}><AiOutlineUndo /></p>
                    : <p onClick={props.isDoneHandler}><AiOutlineCheckCircle /></p>
                }              
                <p onClick={togglePriority}><AiOutlineOrderedList /></p>
                {
                    toggle && <PriorityBtns />
                }             
            </div>
        </div>
    )

}

export default ProductItem;
