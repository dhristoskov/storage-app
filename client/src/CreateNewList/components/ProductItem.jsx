import React from 'react';

const ProductItem = (props) => {

    const totalPrice = (props.priceWithVat * props.qty).toFixed(2);
    const price = props.price.toFixed(2);
    const vatPrice = props.priceWithVat.toFixed(2);

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
                <button>delete</button>
                <button>edit</button>
                <button>done</button>
                <button>priority</button>
            </div>
        </div>
    )

}

export default ProductItem;
