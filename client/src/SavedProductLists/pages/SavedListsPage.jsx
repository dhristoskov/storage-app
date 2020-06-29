import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import SavedProductsList from '../components/SavedProductsList';
import { DATA } from '../../shared-components/data';

const StorageListsPage = () => {
    
    const [ savedLists ] = useState(DATA)
    const { name } = useParams();

    return (
        <div>
            <SavedProductsList savedLists={savedLists}/>
            <p>{name}</p>
        </div>
    )
}

export default StorageListsPage;