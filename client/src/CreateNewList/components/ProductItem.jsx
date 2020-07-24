import React, { useState } from 'react';
import { AiOutlineDelete, 
    AiOutlineEdit, 
    AiOutlineCheckCircle, 
    AiOutlineUndo,
    AiOutlineOrderedList,
    AiOutlinePercentage } from 'react-icons/ai'
import { GoIssueOpened, GoHistory } from 'react-icons/go';    

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

    //Format the price numbers
    const fixedName = props.storage.replace(/^./, str => str.toUpperCase())
    const price = parseFloat(props.price).toFixed(2);
    const totalPrice = parseFloat(price * props.qty).toFixed(2);
    const priceWithVat = parseFloat(props.price * (1 + taxes / 100)).toFixed(2);

    //Open priority buttons
    const togglePriority = () => {
        setToggle(prevState => !prevState)
    };

    //Check the priority option
    const priorityHandler = (newPriority) => {
        setIcon(PRIORITES[newPriority]);
    };

    //Toggle between price with taxes and without taxes
    const togglePrice = () => {
        setToggledPrice(prevState => !prevState)
    };

    return(
        <div className='product-wrapper' 
        style={props.isDone ? {background: '#D2DDBB', color: 'white'} : null}>
            <p onClick={props.showInfoHandler} className='name'>{props.name}</p>
            <p className='price'>{toggledPrice ?  priceWithVat : price } { toggledPrice ? '€/vat' : '€'}
            <span className='vat-icon' onClick={togglePrice}><AiOutlinePercentage/></span></p>
            <p className='quantity'>{props.qty}</p>
            <p className='type'>/ {props.type}</p>
            <p className='storage'>{fixedName}</p>
            <p className='total'>{totalPrice} €</p>
            <div className='settings'>
                <p title='Delete' onClick={props.removeProduct}><AiOutlineDelete /></p>
                <p title='Edit' onClick={props.editHandler}><AiOutlineEdit /></p>
                {
                    props.isDone 
                    ? <p title='Undone' onClick={props.isUndoneHandler}><AiOutlineUndo /></p>
                    : <p title='Done' onClick={props.isDoneHandler}><AiOutlineCheckCircle /></p>
                }              
                <p title='Set Priority' onClick={togglePriority}><AiOutlineOrderedList /></p>
                {
                    toggle && <PriorityBtns priorityHandler={priorityHandler} />
                }             
            </div>
            <p className='priority-icon'>{icon}</p>
        </div>
    )

}

export default ProductItem;
