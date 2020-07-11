import React, { createContext, useReducer, useState } from 'react';

import storageReducer from './storageReducer';

export const StorageContext = createContext();

const StorageContextProvider = (props) => {

    const [ storages, dispatch ] = useReducer(storageReducer, []);
    const [ detailList, setDetailList ] = useState(true);

    const showDetailedList = () => {
        setDetailList(true)
    };

    const showSimpleList = () => {
        setDetailList(false)
    };

    return (
        <StorageContext.Provider 
        value={{ 
            storages,
            dispatch,
            detailList, 
            showDetailedList,
            showSimpleList
            }}>
            {props.children}
        </StorageContext.Provider>
    )

}

export default StorageContextProvider;