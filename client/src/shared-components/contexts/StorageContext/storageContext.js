import React, { createContext, useReducer } from 'react';

import storageReducer from './storageReducer';

export const StorageContext = createContext();

const StorageContextProvider = (props) => {

    const [ storages, dispatch ] = useReducer(storageReducer, []);

    return (
        <StorageContext.Provider value={{ storages, dispatch }}>
            {props.children}
        </StorageContext.Provider>
    )

}

export default StorageContextProvider;