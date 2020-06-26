import React, { useReducer } from 'react';

import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const productssReducer = ( state, action ) => {
    switch(action.type){
        case 'GET':
            return action.products;
        case 'ADD':
            return [...state, action.product ]
        case 'DELETE':
            return state.filter(product => product.id !== action.id);
        case 'UPDATE_PRODUCT':
            return state.map(product => {
                if(product.id === action.id){ 
                return {
                    ...product,
                    ...action.update
                }               
            }
            return product
        });
        case 'DONE':
            return state.map(product => product.id === action.id ? { ...product, isDone: true}: product);
        case 'UNDONE':
            return state.map(product => product.id === action.id ? { ...product, isDone: false}: product)
        default:
            return state;
    }
};

const NewList = () => {

    const [ products, dispatch ] = useReducer(productssReducer, [
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
    ])

    const addNewProduct = ( item ) => {
        console.log(item)
        dispatch({ type:'ADD', product:{ id: Date.now(), ...item }})
    }

    const removeProduct = (pid) => {
        dispatch({type: 'DELETE', id: pid})
    }

    const isDoneHandler = (pid) => {
        dispatch({type: 'DONE', id: pid})
    }

    const isUndoneHandler = (pid) => {
        dispatch({type: 'UNDONE', id: pid})
    }

    return (
        <div>            
            <ProductList products={products}
            removeProduct={removeProduct}
            isDoneHandler={isDoneHandler}
            isUndoneHandler={isUndoneHandler}/>
            <ProductForm addNewProduct={addNewProduct}/>
        </div>
    )
}

export default NewList;