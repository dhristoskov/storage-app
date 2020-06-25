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
                        storage={product.storage}/>
                    )
            })}
            <p>{props.name}</p>
        </div>
    )
}

export default ProductList;