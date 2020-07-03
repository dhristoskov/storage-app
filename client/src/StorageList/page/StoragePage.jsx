import React, { useReducer, useState, Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../axios';

import StorageForm from '../components/StorageForm';
import StorageList from '../components/StorageList';
import StorageCounter from '../components/StorageCounter';
import StorageSimpleList from '../components/StorageSimpleList';
import ListButtons from '../components/ListButtons';
import Modal from '../../shared-components/Modal/Modal';
import DeleteWarning from '../components/DeleteWarning';

const storageReducer = ( state, action ) => {
    switch(action.type){
        case 'GET':
            return action.storages;
        case 'ADD':
            return [...state, action.storage ]
        case 'DELETE':
            return state.filter(storage => storage.id !== action.id);
        default:
            return state;
    }
};

const StoragePage = () => {

    const [ storages, dispatch ] = useReducer(storageReducer, []);
    const [showWarning, setShowWarning ] = useState(false);
    const [ itemToDelete, setItemToDelete ] = useState(null);
    const [ detailList, setDetailList ] = useState(true)
    const history = useHistory();

    useEffect(() => {
        axios.get('/storage')
             .then(res => {
                dispatch({type: 'GET', storages: res.data.storages})
             }).catch(err => {
                 console.log(err)
             })
    }, []);

    const addStorage = async ( newStorage ) => {
        await axios.post('/storage', newStorage,
          { 'Content-Type': 'application/json' })
                   .then(res => {
                       dispatch({ type:'ADD', 
                       storage: {id: res.data.storage._id, ...res.data.storage}})
                   }).catch(err => {
                    console.log(err)
                   });
    }

    const deleteStorage = async () => {
        await axios.delete(`/storage/${itemToDelete}`)
                   .then(res => {
                       dispatch({type: 'DELETE', id: itemToDelete});
                       setShowWarning(false);
                   }).catch(err => {
                    console.log(err)
                   });
    };

    //Change with ID
    const moveToStoragePage = (name) => {
        history.push(`/storage/storage-list/${name.toLowerCase()}`);
    };

    //Change with ID
    const moveToCreateList = (name) => {
        history.push(`/storage/create-list/${name.toLowerCase()}`);
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
                    <DeleteWarning 
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