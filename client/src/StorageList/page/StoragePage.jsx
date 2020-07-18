import React, { useState, useEffect, useContext, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../axios';

import StorageForm from '../components/StorageForm';
import StorageList from '../components/StorageList';
import StorageCounter from '../components/StorageCounter';
import StorageSimpleList from '../components/StorageSimpleList';
import ListButtons from '../components/ListButtons';
import Modal from '../../shared-components/components/Modal/Modal';
import DeleteWarning from '../../shared-components/components/DeleteWarning/DeleteWarning';
import { StorageContext } from '../../shared-components/contexts/StorageContext/StorageContext';
import Layout from '../../shared-components/components/Layout/Layout';
import Loader from '../../shared-components/components/Loader/Loader';

const StoragePage = () => {

    const { storages, dispatch, detailList, showDetailedList, showSimpleList } = useContext(StorageContext);
    const [showWarning, setShowWarning ] = useState(false);
    const [ itemToDelete, setItemToDelete ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setIsLoading(true);
        axios.get('/storages')
             .then(res => {
                setIsLoading(false);
                dispatch({type: 'GET', storages: res.data.storages})
             }).catch(err => {
                setIsLoading(false);
                console.log(err)
             })
    }, [dispatch]);

    const addStorage = async ( newStorage ) => {
        setIsLoading(true);
        await axios.post('/storages', newStorage,
          { 'Content-Type': 'application/json' })
                   .then(res => {
                    setIsLoading(false);
                    dispatch({ type:'ADD', 
                    storage: {id: res.data.storage._id, ...res.data.storage}})
                   }).catch(err => {
                    setIsLoading(false);
                    console.log(err)
                   });
    }

    const deleteStorage = async () => {
        setIsLoading(true);
        await axios.delete(`/storages/${itemToDelete}`)
                   .then(res => {
                    setIsLoading(false);
                    dispatch({type: 'DELETE', id: itemToDelete});
                    setShowWarning(false);
                   }).catch(err => {
                    setIsLoading(false);
                    console.log(err)
                   });
    };

    //Move to Storage Lists Page
    const moveToStoragePage = (id) => {
        history.push(`/storage/storage-list/${id}`);
    };

    //Move to Create List page
    const moveToCreateList = (id) => {
        history.push(`/storage/create-list/${id}`);
    };

    const showDeleteWarning = (storageId) => {
        setShowWarning(true);
        setItemToDelete(storageId);
    };

    const hideDeleteWarning = () => {
        setShowWarning(false);
        setItemToDelete(null)
    };

    //Switch between detail and simple list mode
    let details;
    if(detailList) {
        details =  <StorageList storages={storages}
                    showDeleteWarning={showDeleteWarning}
                    moveToStoragePage={moveToStoragePage}
                    moveToCreateList={moveToCreateList}/>
    }else{
        details =  <StorageSimpleList storages={storages}
                    showDeleteWarning={showDeleteWarning}
                    moveToStoragePage={moveToStoragePage}
                    moveToCreateList={moveToCreateList}/>
    }

    return (
        <Layout>
            {
                showWarning &&   
                <Modal removeModal={hideDeleteWarning}>
                    <DeleteWarning msg={'Do you want to proceed and delete this storage? Please note that it cant be undone thereafter.And you will lose all entries'}
                    delete={deleteStorage}
                    cancel={hideDeleteWarning}/>
                </Modal>
            }
            <Fragment>
                {
                    isLoading
                    ? <Loader />
                    : <div className='storage-main'>
                        <StorageForm addStorage={addStorage}/>
                        <StorageCounter storages={storages}/>
                        <ListButtons showDetailedList={showDetailedList}
                        showSimpleList={showSimpleList}/>
                        {details}
                     </div>
                }
            </Fragment>
        </Layout>
    )
}

export default StoragePage;