import React from 'react';

import ProductItem from '../../CreateNewList/components/ProductItem';

const SavedListItem = (props) => {

    return (
        <div>
            <p>{props.storage}</p>
            <p>{props.data}</p>
            <p>{props.totalPrice}</p>
            <p>{props.totalVat}</p>
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
    )

}

export default SavedListItem;