import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import { useParams } from 'react-router-dom';

import SavedProductsList from '../components/SavedProductsList';
//import ProductStat from '../../shared-components/ProductStat/ProductStat';

const StorageListsPage = () => {
  
    const [ savedLists, setSavedLists ] = useState([])
    const { storageName } = useParams();
    
    //Fix first letter in the storage Name
    const fixedName = storageName.replace(/^./, str => str.toUpperCase());

    useEffect(() => {
        axios.get(`/archive/${storageName}`)
             .then(res => {
                setSavedLists(res.data.lists)
             }).catch(err => {
                 console.log(err)
             })
    }, [storageName])

    return (
        <div className='main-wrapper'>
            <p className='storage-name'>You are in <span>{fixedName}</span> storage.</p>
            <SavedProductsList savedLists={savedLists}
                             fixedName={fixedName}/>
            {/* <ProductStat /> */}
        </div>
    )
}

export default StorageListsPage;