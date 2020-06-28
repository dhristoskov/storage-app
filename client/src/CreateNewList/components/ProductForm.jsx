import React, { useState, useEffect } from 'react';
import { AiOutlineMinusCircle, 
    AiOutlinePlusCircle, 
    AiOutlineCloseCircle } from 'react-icons/ai';

const ProductForm = ( props ) => {

    const { onEdit, 
        addNewProduct, 
        onClearEditHandler,
        onUpdateHandler,
        storageName } = props;
        
    const fixedName = storageName.replace(/^./, str => str.toUpperCase())
    const [ showForm, setShowForm ] = useState(false);
    const [ product, setProduct ] = useState({
        name: '',
        price: '',
        qty: '',
        type: '' || 'n/a', // <---Default value if it is not picked
        storage: fixedName,
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
                storage: fixedName,
                isDone: false
            });
        }
    }, [onEdit, fixedName]);

    const { name, price, qty, type } = product;

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
            storage: fixedName,
            isDone: false
        });
    };

    const onFormHandler = () => {
        setShowForm(prevState => !prevState);
    };

    return(
        <div className='form-main'>
            {
                showForm 
                ? <p className='toggle-form' onClick={onFormHandler}><AiOutlineMinusCircle /></p> 
                : <p className='toggle-form' onClick={onFormHandler}><AiOutlinePlusCircle /></p>
            } 
            {
            showForm ?            
            <form className='form-wrapper' onSubmit={onSubmitHandler}>
                {
                    onEdit && <p className='close-btn' onClick={onClearEditHandler}>
                        <AiOutlineCloseCircle /></p>
                }  
                <input type="text" placeholder='Product' name='name' value={name} 
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
                <input type='submit' value={onEdit ? 'Update' : 'Create'}/>                        
            </form>
            :
            <p>Add Product</p>
            }
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