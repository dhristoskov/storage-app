import React, { useState, Fragment, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../axios';

import StorageForm from '../components/StorageForm';
import StorageList from '../components/StorageList';
import StorageCounter from '../components/StorageCounter';
import StorageSimpleList from '../components/StorageSimpleList';
import ListButtons from '../components/ListButtons';
import Modal from '../../shared-components/components/Modal/Modal';
import DeleteWarning from '../../shared-components/components/DeleteWarning/DeleteWarning';
import { StorageContext } from '../../shared-components/contexts/StorageContext/storageContext';

const StoragePage = () => {

    const { storages, dispatch } = useContext(StorageContext);
    const [showWarning, setShowWarning ] = useState(false);
    const [ itemToDelete, setItemToDelete ] = useState(null);
    const [ detailList, setDetailList ] = useState(true)
    const history = useHistory();

    useEffect(() => {
        axios.get('/storages')
             .then(res => {
                dispatch({type: 'GET', storages: res.data.storages})
             }).catch(err => {
                 console.log(err)
             })
    }, [dispatch]);

    const addStorage = async ( newStorage ) => {
        await axios.post('/storages', newStorage,
          { 'Content-Type': 'application/json' })
                   .then(res => {
                       dispatch({ type:'ADD', 
                       storage: {id: res.data.storage._id, ...res.data.storage}})
                   }).catch(err => {
                    console.log(err)
                   });
    }

    const deleteStorage = async () => {
        await axios.delete(`/storages/${itemToDelete}`)
                   .then(res => {
                       dispatch({type: 'DELETE', id: itemToDelete});
                       setShowWarning(false);
                   }).catch(err => {
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

    const showDetailedList = () => {
        setDetailList(true)
    };

    const showSimpleList = () => {
        setDetailList(false)
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
        <Fragment>
            {
                showWarning &&   
                <Modal removeModal={hideDeleteWarning}>
                    <DeleteWarning msg={'Do you want to proceed and delete this storage? Please note that it cant be undone thereafter.And you will lose all entries'}
                    delete={deleteStorage}
                    cancel={hideDeleteWarning}/>
                </Modal>
            }
            <div className='storage-main'>
                <StorageForm addStorage={addStorage}/>
                <StorageCounter storages={storages}/>
                <ListButtons showDetailedList={showDetailedList}
                showSimpleList={showSimpleList}/>
                {details}
            </div>
        </Fragment>
    )
}

export default StoragePage;