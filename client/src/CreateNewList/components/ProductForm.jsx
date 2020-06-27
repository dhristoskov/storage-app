import React, { useState, useEffect } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai'

import StoragesList from './StoragesList';

const ProductForm = ( props ) => {

    const { onEdit, 
        addNewProduct, 
        onClearEditHandler,
        onUpdateHandler } = props
    const [ product, setProduct ] = useState({
        name: '',
        price: '',
        qty: '',
        type: '' || 'n/a', // <---Default value if it is not picked
        storage: '' || 'not specified', // <--- Same default value if it is not picked
        isDone: false
    });

    //Checking if edit is not null
    useEffect(() => {
        if(onEdit){
            setProduct(onEdit)
        }else{
            setProduct({
                name: '',
                price: '',
                qty: '',
                type: '' || 'n/a', 
                storage: '' || 'not specified',
                isDone: false
            });
        }
    }, [onEdit]);

    const { name, price, qty, storage, type } = product;

    const onChangeHandler = (e) => {
        e.preventDefault();
        setProduct({...product, [e.target.name]: e.target.value});
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(!onEdit){
            addNewProduct(product) 
        }else{
            onUpdateHandler(product)
        }
        setProduct({
            name: '',
            price: '',
            qty: '',
            type: '',
            storage: ''
        })
    }

    return(
        <div>
            <form className='form-wrapper' onSubmit={onSubmitHandler}>
                {
                    onEdit && <p className='close-btn' onClick={onClearEditHandler}>
                        <AiOutlineCloseCircle /></p>
                }  
                <input type="text" placeholder='Name' name='name' value={name} 
                onChange={onChangeHandler} required/>
                <input type="number" placeholder='Price' name='price' value={price}
                onChange={onChangeHandler} required/>
                <input type="number" placeholder='Quantity' name='qty' value={qty}
                onChange={onChangeHandler} required/>
                <select className='type' name="type" value={type} onChange={onChangeHandler} required>
                    <option>Type</option>
                    <option value="kg">kg</option>
                    <option value="pcs">pcs</option>
                </select>
                <StoragesList name={'storage'} value={storage} onChangeHandler={onChangeHandler} required/>
                <input type='submit' value={onEdit ? 'Update' : 'Create'}/>                        
            </form>
        </div>
    )
}

export default ProductForm;

// id: '04',
// name: 'Oranges',
// price: 1.55,
// qty: 55,
// type: 'kg',
// storage: 'Storage Two'