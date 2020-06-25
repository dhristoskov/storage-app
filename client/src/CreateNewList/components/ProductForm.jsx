import React, { useState } from 'react';

const ProductForm = ( props ) => {
    const [ product, setProduct ] = useState({
        id: Date.now(),
        name: '',
        price: '',
        qty: '',
        type: 'kg',
        storage: ''
    });

    const { name, price, qty, storage } = product;

    const onChangeHandler = (e) => {
        e.preventDefault();
        setProduct({...product, [e.target.name]: e.target.value});
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.addNewProduct(product)
        setProduct({
            name: '',
            price: '',
            qty: '',
            type: 'kg',
            storage: ''
        })
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <input type="text" placeholder='Name' name='name' value={name} 
                onChange={onChangeHandler} required/>
                <input type="number" placeholder='Price' name='price' value={price}
                onChange={onChangeHandler} required/>
                <input type="number" placeholder='Quantity' name='qty' value={qty}
                onChange={onChangeHandler} required/>
                <input type="text" placeholder='Storage' name='storage' value={storage}
                onChange={onChangeHandler} required/>
                <input type="submit" value='submit'/>
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