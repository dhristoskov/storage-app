import React, { createContext, useReducer } from 'react';

import productsReducer from './productsReducer';

export const ProductsContext = createContext();

const ProductsContextProcider = (props) => {

    // const initialState = {
    //     products: []
    // }

    const [ products, dispatch ] = useReducer(productsReducer, [
        {
            id: '01',
            name: 'Cheese',
            price: 12.25,
            qty: 25,
            type: 'psc',
            storage: 'Storage First',
            isDone: false
        },
        {
            id: '02',
            name: 'Tomato',
            price: 2.25,
            qty: 15,
            type: 'kg',
            storage: 'Storage First',
            isDone: false
        },
        {
            id: '03',
            name: 'Soda',
            price: 0.55,
            qty: 35,
            type: 'pcs',
            storage: 'Storage Two',
            isDone: false
        },
        {
            id: '04',
            name: 'Oranges',
            price: 1.55,
            qty: 55,
            type: 'kg',
            storage: 'Storage Two',
            isDone: false
        }
    ]);

    return(
        <ProductsContext.Provider value={{ products, dispatch }}>
            {props.children}
        </ProductsContext.Provider>
    )
};

export default ProductsContextProcider;