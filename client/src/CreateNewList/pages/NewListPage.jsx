import React, { useState, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import axios from '../../axios';

import DatePicker from '../components/DatePickerForm';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import SaveButtons from '../../shared-components/components/Buttons/SaveButtons';
import ProductsUpload from '../components/ProductsUpload';
import { ProductsContext } from '../../shared-components/contexts/ProductsContext/ProductsContext';
import Layout from '../../shared-components/components/Layout/Layout';
import StatsModal from '../../shared-components/components/StatsModal/StatsModal';
import ProductStat from '../../shared-components/components/ProductStat/ProductStat';

const NewList = () => {

    const { id } = useParams(); 
    const { products, dispatch } = useContext(ProductsContext);
    const [ storageName, setStorageName ] = useState('')
    const [ onEdit, setOnEdit ] = useState();
    const [ expDate, setExpDate ] = useState(new Date());
    const [ showInfo, setShowInfo ] = useState(false);
    const fixedName = storageName.replace(/^./, str => str.toUpperCase());

    //Add Products to Specific Storage
    const currentStorage = products.filter(product =>
         product.storage.toLowerCase() === storageName);

    //Get storage name prop
    useEffect(() => {
        axios.get(`/storages/${id}`)
             .then(res => {
                setStorageName(res.data.storage.name)
             }).catch(err => {
                 console.log(err)
             })
    }, [id]);

    //Upload data to DB
    const saveListToDB = async () => {
        const dataToSave = {
            name: storageName,
            addDate: Date.now(),
            expDate: '' || expDate,
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

    //Open Info Modal
    const showInfoHandler = (id) => {
        setShowInfo(true);
        console.log(id)
    };

    //Close Info Modal
    const hideInfoHandler = () => {
        setShowInfo(false);
    };

    return (
        <Layout>
            {
                showInfo &&   
                <StatsModal>
                    <ProductStat hideInfoHandler={hideInfoHandler}/>
                </StatsModal>
            }
            <div className='main-wrapper'>     
                <p className='storage-name'>You are in <span>{fixedName}</span> storage.</p>
                <DatePicker expDate={expDate}
                    setExpDate={setExpDate}/>
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
                editHandler={editHandler}
                showInfoHandler={showInfoHandler}/>    
                <SaveButtons saveListToDB={saveListToDB}/>           
            </div>
        </Layout>
    )
}

export default NewList;