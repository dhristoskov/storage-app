import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import SavedProductsList from '../components/SavedProductsList';

const StorageListsPage = () => {
    
    const [ savedLists ] = useState([])
    const { name } = useParams();

    return (
        <div>
            <SavedProductsList savedLists={savedLists}/>
            <p>{name}</p>
        </div>
    )
}

export default StorageListsPage;