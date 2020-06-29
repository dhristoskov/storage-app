import React, { useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import SaveButtons from '../../shared-components/Buttons/SaveButtons';
import ProductsUpload from '../components/ProductsUpload';

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
            return state.map(product => product.id === action.id ? { ...product, isDone: false}: product);           
        case 'DESC':
            return state.slice().sort((a, b) => b.name.localeCompare(a.name));
        case 'ASC':
            return state.slice().sort((a, b) => a.name.localeCompare(b.name));
        case 'HIGH_FIRST':
            return state.slice().sort((a, b) => b.price - a.price);
        case 'LOW_FIRST':
            return state.slice().sort((a, b) => a.price - b.price);
        default:
            return state;
    }
};

const NewList = () => {

    const { storageName } = useParams(); 
    const fixedName = storageName.replace(/^./, str => str.toUpperCase())
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

    const onAscOrder = () => {
        dispatch({type: 'ASC'});
    }
    const onDescOrder = () => {
        dispatch({type: 'DESC'});
    }

    const onHighPrice = () => {
        dispatch({type: 'HIGH_FIRST'});
    }
    const onLowPrice = () => {
        dispatch({type: 'LOW_FIRST'});
    }

    const onClearEditHandler = () => {
        setOnEdit(null);
    }

    return (
        <div className='main-wrapper'>     
            <p className='storage-name'>You are in <span>{fixedName}</span> storage.</p>
            <ProductForm addNewProduct={addNewProduct}
            onClearEditHandler={onClearEditHandler}
            onUpdateHandler={onUpdateHandler}
            storageName={storageName}
            onEdit={onEdit}/>   
             <ProductsUpload />             
            <ProductList products={products}
            removeProduct={removeProduct}
            isDoneHandler={isDoneHandler}
            isUndoneHandler={isUndoneHandler}
            onDescOrder={onDescOrder}
            onAscOrder={onAscOrder}
            onHighPrice={onHighPrice}
            onLowPrice={onLowPrice}
            editHandler={editHandler}/>    
            <SaveButtons />           
        </div>
    )
}

export default NewList;