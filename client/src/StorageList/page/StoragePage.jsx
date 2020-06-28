import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';

import StorageForm from '../components/StorageForm';
import StorageList from '../components/StorageList';
import StorageCounter from '../components/StorageCounter';

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

    const history = useHistory();
    const [ storages, dispatch ] = useReducer(storageReducer, [
        { id: '001', name: 'Dragor' },
        { id: '002', name: 'Pazardzhik' }
    ]);

    const deleteStorage = (storageId) => {
        dispatch({type: 'DELETE', id: storageId})
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

    return (
        <div className='storage-main'>
            <StorageForm addStorage={addStorage}/>
            <StorageCounter storages={storages}/>
            <StorageList storages={storages}
            deleteStorage={deleteStorage}
            moveToStoragePage={moveToStoragePage}
            moveToCreateList={moveToCreateList}/>
        </div>
    )
}

export default StoragePage;