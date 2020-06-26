import React from 'react';

import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import { products } from '../../shared-components/data';

const NewList = () => {

    const addNewProduct = ( product ) => {
        products.push({id: Date.now(), ...product})
    }

    const removeProduct = (pid) => {
        console.log(products.find(e => e.id === pid))
        products.filter(e => e.id !== pid);
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