import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import axios from '../../axios';

import DatePicker from '../components/DatePickerForm';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import SaveButtons from '../../shared-components/components/Buttons/SaveButtons';
import ProductsUpload from '../components/ProductsUpload';
import { ProductsContext } from '../../shared-components/contexts/ProductsContext/productsContext';

const NewList = () => {

    const { products, dispatch } = useContext(ProductsContext);
    const { storageName } = useParams(); 
    const fixedName = storageName.replace(/^./, str => str.toUpperCase());
    const [ onEdit, setOnEdit ] = useState();

    //Add Products to Specific Storage
    const currentStorage = products.filter(product =>
         product.storage.toLowerCase() === storageName.toLowerCase());

    //Upload data to DB
    const saveListToDB = async () => {
        const dataToSave = {
            name: storageName,
            addDate: Date.now(),
            data: currentStorage
        }

        await axios.post('/archive', dataToSave,
                {'Content-Type': 'application/json'})
                   .then(res => {
                       console.log(res.data)
                   }).catch(err => {
                       console.log(err)
                   });
    }     

    const addNewProduct = ( item ) => {
        dispatch({ type:'ADD', product:{ id: uuidv4(), ...item }});
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
            <DatePicker />
            <ProductForm addNewProduct={addNewProduct}
            onClearEditHandler={onClearEditHandler}
            onUpdateHandler={onUpdateHandler}
            storageName={storageName}
            onEdit={onEdit}/>   
            <ProductsUpload addNewProduct={addNewProduct}/>             
            <ProductList products={currentStorage}
            removeProduct={removeProduct}
            isDoneHandler={isDoneHandler}
            isUndoneHandler={isUndoneHandler}
            onDescOrder={onDescOrder}
            onAscOrder={onAscOrder}
            onHighPrice={onHighPrice}
            onLowPrice={onLowPrice}
            editHandler={editHandler}/>    
            <SaveButtons saveListToDB={saveListToDB}/>           
        </div>
    )
}

export default NewList;