import React, { useReducer, useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

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
        // case 'UPDATE':
        //     return state.map(storage => {
        //         if(storage.id === action.id){ 
        //         return {
        //             ...storage,
        //             ...action.update
        //         }               
        //     }
        //     return product
        // });
        default:
            return state;
    }
};

const StoragePage = () => {

    const [showWarning, setShowWarning ] = useState(false);
    const [ itemToDelete, setItemToDelete ] = useState(null);
    const [ detailList, setDetailList ] = useState(true)
    const history = useHistory();

    //DUMMY DATA
    const [ storages, dispatch ] = useReducer(storageReducer, [
        { id: '001', name: 'Dragor' },
        { id: '002', name: 'Pazardzhik' }
    ]);

    const deleteStorage = () => {
        dispatch({type: 'DELETE', id: itemToDelete});
        setShowWarning(false);
    };

    const addStorage = ( newStorage ) => {
        dispatch({ type:'ADD', storage: newStorage})
    }

    const moveToStoragePage = (name) => {
        history.push(`/storage/storage-list/${name.toLowerCase()}`);
    };

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