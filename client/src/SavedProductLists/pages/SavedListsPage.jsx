import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import SavedProductsList from '../components/SavedProductsList';
import { DATA } from '../../shared-components/data';
import ProductStat from '../../shared-components/ProductStat/ProductStat';

const StorageListsPage = () => {
  
    const [ savedLists ] = useState(DATA)
    const { storageName } = useParams();
    
    //Fix first letter in the storage Name
    const fixedName = storageName.replace(/^./, str => str.toUpperCase());

    return (
        <div className='main-wrapper'>
            <p className='storage-name'>You are in <span>{fixedName}</span> storage.</p>
            <SavedProductsList savedLists={savedLists}/>
            <ProductStat />
        </div>
    )
}

export default StorageListsPage;