import React from 'react';

import ProductItem from './ProductItem';
import TableHeader from './TableHeader';
import ProductsCounter from './ProductsCounter';
import TotalCalculation from './TotalCalculation';

const ProductList = (props) => {

    //If list is empty array
    if(!props.products.length) {
        return(
            <div className='empty-list'>
                <p>Your product list is empty </p>
                <p className='line'/>
            </div>  
        )   
    }

    return (
        <div className='list-wrapper'>
            <ProductsCounter products={props.products}/>
            <TableHeader onAscOrder={props.onAscOrder}
            onDescOrder={props.onDescOrder}
            onLowPrice={props.onLowPrice}
            onHighPrice={props.onHighPrice}/>
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
            <TotalCalculation products={props.products}/>
        </div>
    )
}

export default ProductList;