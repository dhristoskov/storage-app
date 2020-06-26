import React from 'react';
import ProductItem from './ProductItem';

const ProductList = (props) => {

    return (
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
                        isDone={product.isDone}
                        removeProduct={() => props.removeProduct(product.id)}
                        isDoneHandler={() => props.isDoneHandler(product.id)}
                        isUndoneHandler={() => props.isUndoneHandler(product.id)}
                        editHandler={() => props.editHandler(product.id)}/>
                    )
            })}
            <p>{props.name}</p>
        </div>
    )
}

export default ProductList;