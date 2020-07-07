import React, { useState } from 'react';
import { AiOutlineDelete, 
    AiOutlineEdit, 
    AiOutlineCheckCircle, 
    AiOutlineUndo,
    AiOutlineOrderedList } from 'react-icons/ai'
import { GoIssueOpened, GoHistory } from 'react-icons/go';    
import { FaMoneyBillWave } from 'react-icons/fa';

import PriorityBtns from '../../shared-components/components/Buttons/PriorityBtns';

//Priority options map
const PRIORITES = {
    high: <GoIssueOpened style={{color: 'red'}} />,
    normal: null,
    low: <GoHistory style={{ color: 'green'}} />
}

const ProductItem = (props) => {

    const [ icon, setIcon ] = useState(null);
    const [ toggle, setToggle ] = useState(false);
    const [ toggledPrice, setToggledPrice ] = useState(false);
    const taxes = 20;

    const fixedName = props.storage.replace(/^./, str => str.toUpperCase())
    const price = parseFloat(props.price).toFixed(2);
    const totalPrice = parseFloat(price * props.qty).toFixed(2);
    const priceWithVat = parseFloat(props.price * (1 + taxes / 100)).toFixed(2);

    //Open priority buttons
    const togglePriority = () => {
        setToggle(prevState => !prevState)
    };

    //Check the priority option
    const priorityHandler = (priority) => {
        setIcon(PRIORITES[priority])
    };

    //Toggle between price with taxes and without taxes
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
            <p className='storage'>{fixedName}</p>
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
                    toggle && <PriorityBtns priorityHandler={priorityHandler} />
                }             
            </div>
            <p className='priority-icon'>{icon}</p>
        </div>
    )

}

export default ProductItem;
