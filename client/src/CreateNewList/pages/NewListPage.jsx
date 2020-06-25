import React from 'react';

import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import { products } from '../../shared-components/data';

const NewList = () => {

    const addNewProduct = ( product ) => {
        console.log(product)
        products.push(product)
    }

    const removeProduct = (id) => {
        products.filter(product => product.id !== id)
    }

    return (
        <div>            
            <ProductList products={products}
            removeProduct={removeProduct}/>
            <ProductForm addNewProduct={addNewProduct}/>
        </div>
    )
}

export default NewList;