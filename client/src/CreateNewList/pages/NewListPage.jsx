import React, { useReducer, useState } from 'react';

import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const productsReducer = ( state, action ) => {
    switch(action.type){
        case 'GET':
            return action.products;
        case 'ADD':
            return [ action.product, ...state ]
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

    const [ onEdit, setOnEdit ] = useState();
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
    ])

    const addNewProduct = ( item ) => {
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

    const editHandler = (pid) => {
        const product = products.find(e => e.id === pid);
        setOnEdit(product)
    }

    const onUpdateHandler = (item) => {
        dispatch({type: 'UPDATE_PRODUCT', id: item.id, update: item});
        setOnEdit(null);
    }

    const onClearEditHandler = () => {
        setOnEdit(null);
    }

    //Calculating Total Price for all products
    // const totalPrice = products.reduce((prev, cur) =>  {
    //     return prev + (cur.price * cur.qty)
    // }, 0)

    return (
        <div>     
            <ProductForm addNewProduct={addNewProduct}
            onClearEditHandler={onClearEditHandler}
            onUpdateHandler={onUpdateHandler}
            onEdit={onEdit}/>       
            <ProductList products={products}
            removeProduct={removeProduct}
            isDoneHandler={isDoneHandler}
            isUndoneHandler={isUndoneHandler}
            editHandler={editHandler}/>         
        </div>
    )
}

export default NewList;