import React, { useReducer } from 'react';

import StorageForm from '../components/StorageForm';
import StorageList from '../components/StorageList';

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

    const [ storages, dispatch ] = useReducer(storageReducer, [
        { id: '001', name: 'Dragor' },
        { id: '002', name: 'Pazardjik' }
    ]);

    const deleteStorage = (storageId) => {
        dispatch({type: 'DELETE', id: storageId})
    };

    const addStorage = ( newStorage ) => {
        dispatch({ type:'ADD', storage: newStorage})
    }

    return (
        <div>
            <StorageForm addStorage={addStorage}/>
            <StorageList storages={storages}
            deleteStorage={deleteStorage}/>
        </div>
    )
}

export default StoragePage;