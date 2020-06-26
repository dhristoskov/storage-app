import React, { useState } from 'react';

import PriorityBtns from '../../shared-components/Buttons/PriorityBtns';

const ProductItem = (props) => {

    const [ toggle, setToggle ] = useState(false)

    const price = parseFloat(props.price).toFixed(2);
    const vatPrice = parseFloat(props.price + (props.price/100)*20).toFixed(2);
    const totalPrice = parseFloat(vatPrice * props.qty).toFixed(2);

    const togglePriority = () => {
        setToggle(prevState => !prevState)
    }

    return(
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
            <p>{props.name}</p>
            <p>{price}</p>
            <p>{vatPrice}</p>
            <p>{props.qty}</p>
            <p>{props.type}</p>
            <p>{props.storage}</p>
            <p>{totalPrice}</p>
            <div>
                <button onClick={props.removeProduct}>delete</button>
                <button>edit</button>
                {
                    props.isDone 
                    ? <button onClick={props.isUndoneHandler}>undone</button>
                    : <button onClick={props.isDoneHandler}>done</button>
                }              
                <button onClick={togglePriority}>priority</button>
                {
                    toggle && <PriorityBtns />
                }             
            </div>
        </div>
    )

}

export default ProductItem;
