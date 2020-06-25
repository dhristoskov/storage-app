import React from 'react';

import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const products = [
    {
        id: '01',
        name: 'Cheese',
        price: 12.25,
        priceWithVat: 14.70,
        qty: 25,
        type: 'psc',
        storage: 'Storage First'
    },
    {
        id: '02',
        name: 'Tomato',
        price: 2.25,
        priceWithVat: 2.70,
        qty: 15,
        type: 'kg',
        storage: 'Storage First'
    },
    {
        id: '03',
        name: 'Soda',
        price: 0.55,
        priceWithVat: 0.66,
        qty: 35,
        type: 'pcs',
        storage: 'Storage Two'
    },
    {
        id: '04',
        name: 'Oranges',
        price: 1.55,
        priceWithVat: 1.86,
        qty: 55,
        type: 'kg',
        storage: 'Storage Two'
    }
]

const NewList = () => {

    return (
        <div>            
            <ProductList products={products}/>
            <ProductForm />
        </div>
    )
}

export default NewList;