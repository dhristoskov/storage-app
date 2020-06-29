import React, { useState } from 'react';

import ProductItem from '../../CreateNewList/components/ProductItem';

const SavedListItem = (props) => {

    const [ showDetails, setShowDetails ] = useState(false);  

    const onDetailsHandler = () => {
        setShowDetails(prevState => !prevState);
    };

    return (
        <div>
            <div style={{display: 'flex', width: '55%', justifyContent:'space-between'}}>
                <p>{props.storage}</p>
                <p>{props.data}</p>
                <p>{props.totalPrice}</p>
                <p>{props.totalVat}</p>
                <p onClick={onDetailsHandler}>details</p>
            </div>
            {
                showDetails &&
                <div>
                {
                    props.products.map(product => {
                        return (
                            <ProductItem key={product.id}
                            name={product.name}
                            price={product.price}
                            priceWithVat={product.priceWithVat}
                            qty={product.qty}
                            type={product.type}
                            storage={product.storage}
                            isDone={product.isDone} />
                        )
                    })
                }
                </div>
            }
        </div>
    )

}

export default SavedListItem;